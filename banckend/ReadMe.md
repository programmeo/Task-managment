

Task Management API
===================

A RESTful API built with Node.js, Express, and MongoDB for managing tasks with user authentication.

Features
--------

*   User authentication (Register/Login)
*   JWT-based authorization
*   CRUD operations for tasks
*   Task status management
*   Secure password handling with bcrypt
*   Cross-origin resource sharing (CORS) enabled

Tech Stack
----------

*   Node.js
*   Express.js
*   MongoDB
*   Mongoose
*   JWT (JSON Web Tokens)
*   bcrypt
*   cors
*   dotenv

Prerequisites
-------------

*   Node.js (v12 or higher)
*   MongoDB installed and running locally
*   npm or yarn package manager

Getting Started
---------------

1.  **Clone the repository**
    
        git clone <repository-url>
        cd Task-Management/backend
    
2.  **Install dependencies**
    
        npm install
    
3.  **Environment Setup**
    
    Create a `.env` file in the root directory with:
    
        MONGO_URI=mongodb://localhost:27017/
        JWT_SECRET=your_jwt_secret
    
4.  **Start MongoDB**
    
    Ensure MongoDB is running on your system
    
5.  **Run the application**
    
        npm start
    
    The server will start on `http://localhost:3000`
    

API Endpoints
-------------

### Authentication Endpoints

#### Register User

URL: `/api/auth/register`

Method: POST

Description: Register a new user

Required Fields:

    {
        "name": "string",
        "email": "string",
        "password": "string"
    }

#### Login User

URL: `/api/auth/login`

Method: POST

Description: Authenticate user

Required Fields:

    {
        "email": "string",
        "password": "string"
    }

### Task Endpoints

#### Create Task

URL: `/api/task`

Method: POST

Authentication: Bearer Token Required

Required Fields:

    {
        "name": "string",
        "description": "string",
        "status": "pending|progress|completed",
        "date": "Date"
    }

#### Get All Tasks

URL: `/api/task`

Method: GET

Authentication: Bearer Token Required

#### Delete Task

URL: `/api/task/:id`

Method: DELETE

Authentication: Bearer Token Required

#### Update Task

URL: `/api/task/:id`

Method: PUT

Authentication: Bearer Token Required

Fields that can be updated:

    {
        "name": "string",
        "description": "string",
        "status": "pending|progress|completed",
        "date": "Date"
    }

Authentication
--------------

Include the JWT token in the Authorization header for protected routes:

    Authorization: Bearer <your_jwt_token>

Models
------

### User Model

    {
        name: String,
        email: String (unique),
        password: String (hashed),
        timestamps: true
    }

### Task Model

    {
        name: String,
        description: String,
        status: String (enum: ["pending", "progress", "completed"]),
        date: Date,
        owner: ObjectId (ref: "User"),
        timestamps: true
    }

Error Handling
--------------

The API returns appropriate HTTP status codes:

*   200: Success
*   201: Created
*   400: Bad Request
*   401: Unauthorized
*   404: Not Found

Development
-----------

To run in development mode with hot-reload:

    npm install nodemon -D
    nodemon index.js

Project Structure
-----------------

    backend/
    ├── src/
    │   ├── config/
    │   │   └── db.js
    │   ├── middleware/
    │   │   └── auth.js
    │   ├── models/
    │   │   ├── User.js
    │   │   └── Task.js
    │   ├── routes/
    │   │   ├── auth.js
    │   │   ├── taskroute.js
    │   │   └── index.js
    │   └── app.js
    ├── view/
    │   └── index.html
    ├── .env
    ├── .gitignore
    ├── index.js
    ├── package.json
    └── README.md

Contributing
------------

1.  Fork the repository
2.  Create your feature branch
3.  Commit your changes
4.  Push to the branch
5.  Create a Pull Request

License
-------

ISC

Author
------

\[Your Name\]
