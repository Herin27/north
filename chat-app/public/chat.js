const socket = io();
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');
const userList = document.getElementById('user-list');

// Fetch and display users
fetch('/api/users')
    .then(res => res.json())
    .then(users => {
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.username;
            li.dataset.userId = user.id;
            li.addEventListener('click', () => selectUser(user.id, user.username));
            userList.appendChild(li);
        });
    });

let selectedUserId = null;
let senderId = 1; // Replace with the actual logged-in user's ID.

function selectUser(userId, username) {
    selectedUserId = userId;
    chatMessages.innerHTML = `<h3>Chat with ${username}</h3>`;
    fetch(`/api/messages/${senderId}/${userId}`)
        .then(res => res.json())
        .then(messages => {
            messages.forEach(msg => {
                const div = document.createElement('div');
                div.textContent = `${msg.sender_id === senderId ? 'You' : username}: ${msg.message}`;
                chatMessages.appendChild(div);
            });
        });
}

sendButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message && selectedUserId) {
        socket.emit('sendMessage', {
            senderId,
            receiverId: selectedUserId,
            message,
        });
        chatInput.value = '';
    }
});

socket.on('newMessage', data => {
    if (
        (data.senderId === senderId && data.receiverId === selectedUserId) ||
        (data.senderId === selectedUserId && data.receiverId === senderId)
    ) {
        const div = document.createElement('div');
        div.textContent = `${data.senderId === senderId ? 'You' : 'Them'}: ${data.message}`;
        chatMessages.appendChild(div);
    }
});
