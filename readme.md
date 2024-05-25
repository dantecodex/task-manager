# Task Manager App

This is a beginner full-stack web application for managing tasks. It allows users to create, read, update, and delete tasks, with both frontend and backend components. The project utilizes Node.js for the backend, Express.js for routing, MongoDB as the database with Mongoose for object modeling, and vanilla JavaScript for the frontend.

## Connect with Me

Feel free to connect with me on LinkedIn:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/anshulrajput237)

## Table of Contents

- [Features](#features)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Credits](#credits)

## Features

- **CRUD Operations**: Users can perform CRUD (Create, Read, Update, Delete) operations on tasks.
- **Security**: Utilizes rate limiting, error handling, and security headers to enhance application security.
- **Responsive UI**: The frontend is designed to be responsive and work well on various devices.
- **Error Handling**: Comprehensive error handling for both frontend and backend to provide a smooth user experience.
- **Environment Variables**: Uses environment variables for sensitive information such as database connection strings.
- **Content Security Policy (CSP)**: Implements CSP to mitigate risks associated with XSS attacks.

## File Structure

```
project/
│
├── controllers/
│   └── task_controller.js
│
├── models/
│   └── tasks_models.js
│
├── public/
│   ├── browser-app.js
│   ├── edit-task.js
│   ├── index.html
│   ├── task.html
│   ├── main.css
│   └── normalize.css
│
├── routes/
│   └── task_routes.js
│
├── utils/
│   ├── asyncErrorHandler.js
│   ├── customError.js
│   └── globalErrorHandler.js
│
├── app.js
├── server.js
└── .env
```

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/your-username/task-manager.git
    ```

2. Install dependencies:

    ```
    cd task-manager
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and define the following variables:

    ```
    CONN_STR=your_mongodb_connection_string
    PORT=5006
    ```

    Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

4. Start the server:

    ```
    npm start
    ```

## Usage

1. Open your web browser and navigate to `http://localhost:5006` to access the application.
2. You can perform CRUD operations on tasks: create new tasks, view existing tasks, update tasks, and delete tasks.
3. Navigate between different views using the navigation links provided.
4. Enjoy managing your tasks efficiently!

## API Endpoints

- **GET** `/api/v1/tasks`: Get all tasks.
- **POST** `/api/v1/tasks`: Create a new task.
- **GET** `/api/v1/tasks/:id`: Get a task by ID.
- **PATCH** `/api/v1/tasks/:id`: Update a task by ID.
- **DELETE** `/api/v1/tasks/:id`: Delete a task by ID.

## Credits

- This project utilizes various open-source libraries and frameworks, including Express.js, Mongoose, and Axios.
- Special thanks to John Smilga for providing frontend section.

