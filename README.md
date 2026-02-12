# Practice Repository

A collection of practice projects demonstrating various web development concepts and technologies.

## 📁 Projects Overview

### 1. **Weather App** 🌤️
A simple weather application that fetches current weather data using the OpenWeatherMap API.

**Technologies:** HTML, CSS, JavaScript  
**Location:** [`Weather/`](Weather/)

**Features:**
- Search weather by city name
- Display temperature, description, and city name
- Error handling for invalid cities
- Dark mode UI

**Key Files:**
- [`Weather/index.html`](Weather/index.html)
- [`Weather/script.js`](Weather/script.js)
- [`Weather/styles.css`](Weather/styles.css)

---

### 2. **Todo List** ✅
A task management application with local storage persistence.

**Technologies:** HTML, CSS, JavaScript  
**Location:** [`Todo/`](Todo/)

**Features:**
- Add new tasks
- Mark tasks as completed
- Delete tasks
- LocalStorage integration for data persistence

**Key Files:**
- [`Todo/index.html`](Todo/index.html)
- [`Todo/script.js`](Todo/script.js)
- [`Todo/styles.css`](Todo/styles.css)

---

### 3. **Expense Tracker** 💰
A personal finance tracker to monitor expenses.

**Technologies:** HTML, CSS, JavaScript  
**Location:** [`Expense_tracker/`](Expense_tracker/)

**Features:**
- Add expenses with name and amount
- View total expenses
- Delete individual expenses
- LocalStorage for data persistence
- Real-time total calculation

**Key Files:**
- [`Expense_tracker/index.html`](Expense_tracker/index.html)
- [`Expense_tracker/script.js`](Expense_tracker/script.js)
- [`Expense_tracker/styles.css`](Expense_tracker/styles.css)

---

### 4. **E-Commerce** 🛒
A simple e-commerce application with shopping cart functionality.

**Technologies:** HTML, CSS, JavaScript  
**Location:** [`Ecommerce/`](Ecommerce/)

**Features:**
- Product listing
- Add to cart functionality
- Cart total calculation
- Checkout process
- LocalStorage for cart persistence

**Key Files:**
- [`Ecommerce/index.html`](Ecommerce/index.html)
- [`Ecommerce/script.js`](Ecommerce/script.js)
- [`Ecommerce/styles.css`](Ecommerce/styles.css)

---

### 5. **Nginx Server** 🖥️
A custom HTTP server implementation using Node.js.

**Technologies:** Node.js  
**Location:** [`Ngnix_Server/`](Ngnix_Server/)

**Features:**
- Basic HTTP server
- Multiple route handling (index, about, contact)
- MIME type handling
- 404 error handling

**Key Files:**
- [`Ngnix_Server/server.js`](Ngnix_Server/server.js)
- [`Ngnix_Server/index.html`](Ngnix_Server/index.html)
- [`Ngnix_Server/about.html`](Ngnix_Server/about.html)
- [`Ngnix_Server/contact.html`](Ngnix_Server/contact.html)

---

### 6. **Event Logger** 📝
A system monitoring tool that logs events to a file.

**Technologies:** Node.js  
**Location:** [`Event-Logger/`](Event-Logger/)

**Features:**
- Event-driven logging system
- Memory usage monitoring
- File system logging
- Custom EventEmitter implementation

**Key Files:**
- [`Event-Logger/logger.js`](Event-Logger/logger.js)

---

### 7. **Project Management System** 📊
A comprehensive backend application for project and task management with authentication.

**Technologies:** Node.js, Express, MongoDB, JWT, Nodemailer  
**Location:** [`Project-Management/`](Project-Management/)

**Features:**
- User authentication (register, login, logout)
- Email verification
- Password reset functionality
- Project CRUD operations
- Team member management with roles (Admin, Project Admin, Member)
- Task management with subtasks
- File attachments support
- Project notes
- Role-based access control

**Project Structure:**
```
Project-Management/
├── src/
│   ├── app.js                      # Express app configuration
│   ├── index.js                    # Server entry point
│   ├── controllers/                # Request handlers
│   │   ├── auth-controller.js
│   │   ├── project-controller.js
│   │   ├── task-controller.js
│   │   └── healthcheck-controller.js
│   ├── models/                     # Database schemas
│   │   ├── user-model.js
│   │   ├── project-model.js
│   │   ├── projectMember-model.js
│   │   ├── task-models.js
│   │   ├── subtask-model.js
│   │   └── note-models.js
│   ├── routes/                     # API routes
│   │   ├── auth-routes.js
│   │   ├── project-routes.js
│   │   └── healthcheck-routes.js
│   ├── middlewares/                # Express middlewares
│   │   ├── auth-middleware.js
│   │   ├── validator-middleware.js
│   │   └── multer-middleware.js
│   ├── validators/                 # Input validation
│   │   └── index.js
│   ├── utils/                      # Utility functions
│   │   ├── api-response.js
│   │   ├── api-error.js
│   │   ├── async-handler.js
│   │   ├── constants.js
│   │   └── mail.js
│   └── db/
│       └── database-connection.js
├── public/
│   └── images/                     # Uploaded files
├── package.json
└── .env                            # Environment variables
```

**API Endpoints:**

**Auth Routes** (`/api/v1/auth/`)
- `POST /register` - Register new user
- `POST /login` - User login
- `POST /logout` - User logout (secured)
- `GET /verify-email/:verificationToken` - Verify email
- `POST /refresh-token` - Refresh access token
- `POST /forgot-password` - Request password reset
- `POST /reset-password/:resetToken` - Reset password
- `POST /change-password` - Change password (secured)
- `GET /current-user` - Get current user (secured)
- `POST /resend-email-verification` - Resend verification email (secured)

**Project Routes** (`/api/v1/projects/`) - All secured
- `GET /` - Get all user projects
- `POST /` - Create new project
- `GET /:projectId` - Get project by ID
- `PUT /:projectId` - Update project (Admin only)
- `DELETE /:projectId` - Delete project (Admin only)
- `GET /:projectId/members` - Get project members
- `POST /:projectId/members` - Add member to project (Admin only)
- `PUT /:projectId/members/:userId` - Update member role (Admin only)
- `DELETE /:projectId/members/:userId` - Remove member (Admin only)

**Key Technologies:**
- **Express.js** - Web framework
- **MongoDB & Mongoose** - Database and ODM
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Nodemailer & Mailgen** - Email services
- **Express Validator** - Input validation
- **Multer** - File uploads
- **Cookie Parser** - Cookie handling
- **CORS** - Cross-origin resource sharing

**Security Features:**
- Password hashing with bcrypt
- JWT-based authentication
- Email verification
- Password reset with temporary tokens
- Role-based authorization
- Input validation and sanitization

**Environment Variables:**
See [`.env`](Project-Management/.env) for configuration

**Running the Project:**
```bash
cd Project-Management
npm install
npm run dev  # Development mode with nodemon
npm start    # Production mode
```

**Notes:**
Comprehensive development notes available in [`notes.txt`](Project-Management/notes.txt)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (for backend projects)
- npm or yarn
- MongoDB (for Project Management system)
- Web browser (for frontend projects)

### Installation

For frontend projects (Weather, Todo, Expense Tracker, E-Commerce):
```bash
# Simply open the index.html file in a browser
```

For Node.js projects (Event Logger, Nginx Server):
```bash
cd <project-directory>
node <entry-file.js>
```

For Project Management:
```bash
cd Project-Management
npm install
cp .env.example .env  # Configure your environment variables
npm run dev
```

## 📝 Common Features

- **Dark Mode UI** - All frontend projects feature a modern dark theme
- **LocalStorage** - Frontend apps use browser storage for data persistence
- **Responsive Design** - Mobile-friendly interfaces
- **Error Handling** - Comprehensive error management

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT, Bcrypt
- **Email:** Nodemailer, Mailgen
- **File Upload:** Multer
- **Validation:** Express Validator

## 📚 Learning Resources

This repository serves as a practice ground for:
- DOM Manipulation
- API Integration
- LocalStorage API
- Node.js Event System
- HTTP Server Creation
- Express.js REST APIs
- MongoDB Aggregation
- Authentication & Authorization
- Email Services
- File Handling

## 👤 Author

**Your Name**

## 📄 License

ISC

---

**Note:** This is a practice repository for learning purposes. Projects may contain API keys that should be replaced with your own in production environments.