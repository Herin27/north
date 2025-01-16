const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');
const http = require('http');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
        process.exit(1);
    }
    console.log('Connected to the database.');
});

// User Signup
app.post('/api/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, hashedPassword],
        (err, results) => {
            if (err) return res.status(400).json({ error: 'Username already exists' });
            res.json({ message: 'Signup successful' });
        }
    );
});

// User Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
        if (err || results.length === 0) return res.status(400).json({ error: 'Invalid username or password' });
        const user = results[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ error: 'Invalid username or password' });

        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
        res.json({ token, user: { id: user.id, username: user.username } });
    });
});

// Fetch all users
app.get('/api/users', (req, res) => {
    db.query('SELECT id, username FROM users', (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(results);
    });
});

// Fetch old messages
app.get('/api/messages/:senderId/:receiverId', (req, res) => {
    const { senderId, receiverId } = req.params;
    db.query(
        'SELECT * FROM messages WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?) ORDER BY created_at',
        [senderId, receiverId, receiverId, senderId],
        (err, results) => {
            if (err) return res.status(500).json({ error: 'Database error' });
            res.json(results);
        }
    );
});

// WebSocket for Chat
io.on('connection', socket => {
    console.log('New user connected.');

    socket.on('sendMessage', data => {
        const { senderId, receiverId, message } = data;
        db.query(
            'INSERT INTO messages (sender_id, receiver_id, message) VALUES (?, ?, ?)',
            [senderId, receiverId, message],
            err => {
                if (err) console.error('Error saving message:', err);
                io.emit('newMessage', data);
            }
        );
    });

    socket.on('disconnect', () => {
        console.log('User disconnected.');
    });
});

// Start the server
server.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
