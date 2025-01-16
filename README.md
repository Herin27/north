
<p align="center"><h1 align="center">90 North</h1></p>
<p align="center">
	<em><code>❯ Herin Patel</code></em>
</p>

<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [🔰 Contributing](#-contributing)
- [🙌 Acknowledgments](#-acknowledgments)

---

 📍 Overview

<code>❯ This project is a real-time chat application built using the Django framework. It allows users to sign up, log in, and engage in one-on-one chats with other registered users. The chat messages and user data are stored in the database, and the application uses WebSocket for real-time messaging.</code>

---

 👾 Features

  - User Authentication: 
  - Sign up and log in functionality for users.
  - Secure password hashing for user credentials.

- **Collapsible User List**:
  - A collapsible left menu to display all registered users.

- **One-on-One Chat**:
  - Select a user from the left menu to initiate a private chat.
  - Real-time messaging powered by WebSocket.

- **Chat History**:
  - Retrieve and display old messages from the database.

- **Responsive Design**:
  - User-friendly chat interface that works on all devices.</code>

---

📁 Project Structure

```sh
chat-application/
│
├── chatapp/                     # Chat application module
│   ├── migrations/              # Database migrations
│   ├── templates/               # HTML templates
│   ├── static/                  # Static files (CSS, JS)
│   ├── admin.py                 # Admin panel configuration
│   ├── apps.py                  # App configuration
│   ├── models.py                # Database models
│   ├── views.py                 # Application logic
│   └── consumers.py             # WebSocket consumers
│
├── chatapp_project/             # Main project folder
│   ├── settings.py              # Project settings
│   ├── urls.py                  # URL configuration
│   ├── asgi.py                  # ASGI configuration for WebSocket
│   ├── wsgi.py                  # WSGI configuration
│
├── requirements.txt             # Dependencies
├── db.sqlite3                   # SQLite database (if using SQLite)
└── manage.py                    # Django project management

```


### 📂 Project Index

Here’s a detailed **Project Index** for your Django chat application:  

---

## **Project Index**

### **1. Overview**
   - Introduction to the project.
   - Purpose and objectives of the chat application.

---

### **2. Features**
   - User authentication system:
     - Sign up and log in functionality.
   - Collapsible left menu to display all registered users.
   - One-on-one real-time chat functionality.
   - Storage of user data and chat messages in the database.
   - Old message retrieval and display in the chat interface.
   - WebSocket integration for real-time communication.
   - User-friendly and responsive chat interface.

---

### **3. Technologies Used**
   - **Backend**:
     - Django
     - Django Channels
   - **Frontend**:
     - HTML5, CSS3, JavaScript, Bootstrap
   - **Database**:
     - SQLite (default) or MySQL
   - **Tools**:
     - WebSocket, GitHub, Virtual Environment

---

### **4. Installation and Setup**
   - Prerequisites:
     - Python 3.8+  
     - Django 4.x  
     - Virtual Environment  
     - SQLite or MySQL  
   - Steps to set up locally:
     - Clone the repository.
     - Create and activate a virtual environment.
     - Install dependencies.
     - Set up the database.
     - Create a superuser for the admin panel.
     - Run the server and access the application locally.

---

### **5. Folder Structure**
```
chat-application/
├── chatapp/                     # Chat application module
│   ├── migrations/              # Database migrations
│   ├── templates/               # HTML templates
│   ├── static/                  # Static files (CSS, JS)
│   ├── admin.py                 # Admin panel configuration
│   ├── apps.py                  # App configuration
│   ├── models.py                # Database models
│   ├── views.py                 # Application logic
│   ├── consumers.py             # WebSocket consumers
│   └── urls.py                  # App-specific URLs
│
├── chatapp_project/             # Main project folder
│   ├── settings.py              # Project settings
│   ├── urls.py                  # URL configuration
│   ├── asgi.py                  # ASGI configuration for WebSocket
│   ├── wsgi.py                  # WSGI configuration
│
├── db.sqlite3                   # SQLite database (default)
├── requirements.txt             # Dependencies
└── manage.py                    # Django project management
```

---

### **6. Key Modules and Files**
   - **`chatapp/models.py`**: Defines database models for users and chat messages.
   - **`chatapp/views.py`**: Contains logic for user registration, login, and fetching chat data.
   - **`chatapp/consumers.py`**: Handles WebSocket connections for real-time chat.
   - **`chatapp/templates/`**: Contains frontend HTML files.
   - **`chatapp/static/`**: Contains static files like CSS and JavaScript.
   - **`chatapp_project/asgi.py`**: Configures ASGI for WebSocket.

---

### **7. Database Structure**
   - **Users Table**:
     - Stores user information such as username, email, and password (hashed).
   - **Messages Table**:
     - Stores chat messages with the sender, receiver, timestamp, and message content.

---

### **8. Deployment**
   - Deployment options include PythonAnywhere, AWS, or Heroku.
   - Steps for deployment:
     - Prepare the project (`DEBUG=False`, `ALLOWED_HOSTS` updated).
     - Upload files to the hosting platform.
     - Configure the database and static files.

---

### **9. Project Preview**
   - Screenshots or GIFs of the application.
   - Include sections like:
     - Login/Signup Page
     - User List
     - Chat Interface
     - Admin Dashboard

---

### **10. Future Enhancements**
   - Group chat functionality.
   - File sharing (images, documents).
   - Real-time notifications for new messages.
   - User status (online/offline).

---

Let me know if you'd like help generating any specific sections!

---

## Technologies Used

### Backend
- **Django**: Web framework for backend logic.
- **Django Channels**: Used to implement WebSocket for real-time communication.
- **SQLite/MySQL**: Database to store user data and chat messages.

### Frontend
- **HTML5**: Structure of the web pages.
- **CSS3**: Styling for a responsive and user-friendly design.
- **JavaScript**: Dynamic features for frontend interactivity.

### Tools
- **WebSocket**: Real-time communication protocol.
- **Bootstrap**: CSS framework for responsive design.
- **GitHub**: Version control and collaboration.

---

## Installation and Setup

### Prerequisites
- Python 3.8+
- Django 4.x
- Virtual Environment (recommended)
- SQLite (default) or MySQL database

### Steps to Set Up Locally
Here are the **installation steps** for your Django chat application:  

---

### **Installation Steps**

#### **1. Prerequisites**
Before proceeding, ensure you have the following installed:
   - **Python** (version 3.8+)
   - **Pip** (Python package manager)
   - **Virtualenv** (for managing virtual environments)
   - A code editor (e.g., VSCode, PyCharm)
   - **SQLite** (default, included with Django) or **MySQL** (if preferred)

---

#### **2. Clone the Repository**
```bash
git clone <repository-url>
cd <project-folder-name>
```

---

#### **3. Create a Virtual Environment**
To keep your dependencies isolated, create and activate a virtual environment:
```bash
# Create a virtual environment
python -m venv myenv

# Activate the virtual environment
# For Windows:
myenv\Scripts\activate
# For macOS/Linux:
source myenv/bin/activate
```

---

#### **4. Install Dependencies**
Install all the required Python packages using `requirements.txt`:
```bash
pip install -r requirements.txt
```

---

#### **5. Set Up the Database**
   1. **For SQLite (default)**:  
      - No additional setup is needed. Django will automatically create the database.  

   2. **For MySQL** (if you prefer):  
      - Install MySQL database server and create a database for the project.  
      - Update `DATABASES` in **`settings.py`**:
        ```python
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.mysql',
                'NAME': 'your_database_name',
                'USER': 'your_mysql_user',
                'PASSWORD': 'your_mysql_password',
                'HOST': 'localhost',
                'PORT': '3306',
            }
        }
        ```

---

#### **6. Apply Migrations**
Run the following commands to create the database structure:
```bash
python manage.py makemigrations
python manage.py migrate
```

---

#### **7. Create a Superuser**
To access the Django admin panel, create a superuser:
```bash
python manage.py createsuperuser
```
   - Provide a username, email, and password as prompted.

---

#### **8. Run the Development Server**
Start the Django development server:
```bash
python manage.py runserver
```
   - Open your browser and navigate to: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

---

#### **9. Access the Application**
   - **Admin Panel**: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)  
     - Use the superuser credentials to log in.  
   - **Chat Application**: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

---

#### **10. Deployment (Optional)**
If you wish to deploy the application, consider using:
   - **PythonAnywhere**:
     - Follow their official guide to upload your Django project.
     - Ensure you set up your database and configure `STATIC_ROOT`.
   - **AWS/Heroku**:
     - Follow their deployment guide for Django apps.

---

If you encounter any issues during installation, let me know for troubleshooting assistance!

---

## 🙌 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
