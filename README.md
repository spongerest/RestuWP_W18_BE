# Express and MongoDB API

This is a basic Express.js API project using MongoDB for user authentication and task management.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and MongoDB installed on your system.

The API will run on http://localhost:5000.

## API Endpoints
- /auth/register: User registration, including picture upload.
- /auth: User authentication and routes.
- /task: Task management routes.
- /admin: Admin routes (customize as needed).

## Built With
- Express.js - Node.js web application framework
- MongoDB - NoSQL database
- Multer - Middleware for handling file uploads
- Helmet - Security middleware for Express.js
- cors - CORS middleware
- mongoose - MongoDB object modeling for Node.js
- dotenv - Loads environment variables from a .env file

# Express API Routes

This Express.js API project includes routes for user management and administration. It provides endpoints for retrieving user data, updating user information, and deleting users. Additionally, it enforces authentication and authorization through JSON Web Tokens (JWT).

## Routes

### Get Users

- **URL:** `/users`
- **Method:** GET
- **Description:** Get a list of users.
- **Authentication:** Requires a valid JWT token.
- **Authorization:** Requires admin access.

### Update User

- **URL:** `/:id`
- **Method:** PUT
- **Description:** Update a user's information.
- **Authentication:** Requires a valid JWT token.
- **Authorization:** Requires admin access.

### Delete User

- **URL:** `/:id`
- **Method:** DELETE
- **Description:** Delete a user's account.
- **Authentication:** Requires a valid JWT token.
- **Authorization:** Requires admin access.

### Get User

- **URL:** `/:id`
- **Method:** GET
- **Description:** Get user details by ID.
- **Authentication:** Requires a valid JWT token.
- **Authorization:** Requires admin access.

## Usage

1. Start your Express.js server with these routes.
2. Use an authentication mechanism to generate JWT tokens for user authorization.
3. Make API requests to the specified endpoints with valid JWT tokens and admin access to manage user data.

## This Express.js API project includes routes for task management. It provides endpoints for creating, updating, and retrieving tasks while enforcing authentication through JSON Web Tokens (JWT).

## Routes

### Create Task

- **URL:** `/create`
- **Method:** POST
- **Description:** Create a new task.
- **Authentication:** Requires a valid JWT token.

### Update Task

- **URL:** `/:id`
- **Method:** PUT
- **Description:** Update a task by ID.
- **Authentication:** Requires a valid JWT token.

### Get Task

- **URL:** `/:id`
- **Method:** GET
- **Description:** Retrieve a task by ID.
- **Authentication:** Requires a valid JWT token.

### Get Tasks

- **URL:** `/`
- **Method:** GET
- **Description:** Retrieve a list of tasks.
- **Authentication:** Requires a valid JWT token.

## Usage

1. Start your Express.js server with these routes.
2. Use an authentication mechanism to generate JWT tokens for user authorization.
3. Make API requests to the specified endpoints with valid JWT tokens to manage tasks.

## Authors
Restu Windri P