Task Management Frontend
========================

A modern React-based task management application with features like authentication, dark mode, and CRUD operations for tasks.

Features
--------

*   **User Authentication**
    *   Register/Login functionality
    *   Protected routes
    *   JWT token-based authentication
*   **Task Management**
    *   Create, Read, Update, Delete tasks
    *   Task filtering and search
    *   Status tracking (pending, progress, completed)
    *   Due date management
*   **UI/UX**
    *   Responsive design
    *   Dark/Light mode toggle
    *   Modern card-based interface
    *   Search and filter capabilities

Tech Stack
----------

*   **React** - Frontend framework
*   **Vite** - Build tool
*   **TailwindCSS** - Styling
*   **React Router** - Navigation
*   **Axios** - API requests
*   **React Icons** - UI icons
*   **JWT** - Authentication

Prerequisites
-------------

*   Node.js (v18 or higher)
*   npm or yarn
*   Backend API running ([Backend Setup](../backend/README.md))

Environment Setup
-----------------

    VITE_HOST_URI=http://localhost:3000

Installation
------------

1.  **Clone the repository**
    
        git clone <repository-url>
        cd Task-Management/frontend
    
2.  **Install dependencies**
    
        npm install
    
3.  **Start development server**
    
        npm run dev
    

Project Structure
-----------------

    
    frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Card.jsx
    │   │   ├── Form.jsx
    │   │   ├── Login.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── NavbarDash.jsx
    │   │   ├── Protected.jsx
    │   │   ├── SignUp.jsx
    │   │   └── Toggle.jsx
    │   ├── context/
    │   │   ├── UserContext.js
    │   │   └── UserProvider.js
    │   ├── pages/
    │   │   ├── AuthPage.jsx
    │   │   ├── DashBoard.jsx
    │   │   └── Home.jsx
    │   ├── utils/
    │   │   └── auth.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── .env
    ├── .gitignore
    ├── package.json
    └── vite.config.js
        

Available Scripts
-----------------

*   `npm run dev` - Start development server

Component Overview
------------------

### Auth Components

*   `Login.jsx` - User login form
*   `SignUp.jsx` - User registration form
*   `Protected.jsx` - Route protection wrapper

### Layout Components

*   `Navbar.jsx` - Main navigation
*   `NavbarDash.jsx` - Dashboard navigation
*   `Toggle.jsx` - Dark/Light mode toggle

### Task Components

*   `Card.jsx` - Task display and management
*   `Form.jsx` - Task creation/editing form

Features in Detail
------------------

### Authentication Flow

1.  User registers/logs in
2.  JWT token stored in localStorage
3.  Protected routes check token validity
4.  Automatic redirects for unauthorized access

### Task Management

*   Create tasks with title, description, status, due date
*   Edit existing tasks
*   Delete tasks
*   Filter tasks by status
*   Search tasks by title/description

### Theme Management

*   System supports light/dark modes
*   Theme persistence across sessions
*   Real-time theme switching

