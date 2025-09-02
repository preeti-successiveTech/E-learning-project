# E-learning Project

This project is a comprehensive e-learning platform designed to provide a seamless online learning experience. It features a robust backend API built with Node.js and Express, which handles user data, course content, and authentication. The frontend is a dynamic and responsive single-page application built with React, allowing users to easily browse, enroll in, and consume educational content.

---

##  Features  

###  For Instructors  
- Create and manage courses with title, description, lessons, and content.  
- Add, edit, and delete lessons (automatically updates courses).  
- View feedback from students.  
- Simple dashboard with welcome page.  

###  For Students  
- Browse all available courses.  
- Enroll in courses with a single click.  
- Access enrolled courses from **Student Dashboard**.  
- Real-time notifications when new courses are added (via GraphQL subscriptions).  
- View lessons and course details.  

###  Core Features  
- Authentication (JWT-based login & protected routes).  
- Role-based access (Instructor / Student).  
- REST API for courses and lessons (Node.js + Express + MongoDB).  
- GraphQL subscription for live course notifications.  
- Responsive UI built with **Next.js** (React).  
- Styled with **custom CSS** (no heavy UI frameworks).  

---

##  Tech Stack  

**Frontend:**  
- Next.js (React)  
- Apollo Client (GraphQL subscriptions)  
- Axios (API calls)  
- JWT Decode (auth handling)  
- Custom CSS  

**Backend:**  
- Node.js + Express  
- MongoDB + Mongoose  
- Apollo Server (GraphQL Subscriptions)  
- JWT Authentication  

---

## Project Structure

The project is organized into a monorepo structure with a separate frontend and backend.

```plaintext
e-learning-platform/
│
├── e-learning-backend/                 # Backend (Node.js + Express + MongoDB + GraphQL)
│ ├── src/                              # All backend source files
│ │   ├── models/                       # Mongoose schemas (User, Course, Lesson)
│ │   ├── routes/                       # REST API routes
│ │   ├── controllers/                  # Business logic (handling requests)
│ │   ├── repository/                   # Database queries (data access layer)
│ │   ├── services/                     # Core application logic (business services)
│ │   ├── graphql/                      # GraphQL schemas, resolvers, subscriptions
│ │   ├── middleware/                   # Auth & request middlewares
│ │   ├── validation/                   # Joi / schema validations
│ │   ├── utils/                        # Helper functions
│ │   └── server.js                     # Entry point
│ ├── package.json
│ └── .env
│
├── e-learning-frontend/                # Frontend (Next.js + React)
│ ├── src/                              # All frontend source files
│ │   ├── app/                          # Next.js app router pages
│ │   ├── components/                   # Reusable UI components
│ │   ├── context/                      # Global state management (Auth, Notifications, etc.)
│ │   └── lib/api.js                    # Axios setup with JWT interceptor
│ ├── package.json
│ └── next.config.js
│
└── README.md

```

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

-   Node.js (v14 or newer is recommended)
-   npm (comes with Node.js)
-   MongoDB (ensure the database server is running)

## Getting Started

Follow these steps to get your development environment set up and running.

### 1. Backend Setup

First, let's get the server running.

```bash
# 1. Navigate to the backend directory
cd e-learning-backend

# 2. Install dependencies
npm install
```

#### Environment Variables (`.env`)

The backend uses a `.env` file for configuration. Create a file named `.env` in the `e-learning-backend` root directory and add the following content. This file is used to store sensitive information and should not be committed to version control.

```ini
# Backend Environment Variables

# Port for the server to listen on
PORT=5000

# Your MongoDB connection string
MONGODB_URI=mongodb://127.0.0.1:27017/e-learning-db

# Secret key for signing JSON Web Tokens (JWT)
JWT_SECRET=a_very_strong_and_secret_key
```

Now, you can start the backend server:

```bash
# 3. Run the backend server
npm run dev
```

The API server will be running on `http://localhost:5000`.

### 2. Frontend Setup

In a new terminal window, set up and run the React application.

```bash
# 1. Navigate to the frontend directory
cd e-learning-frontend/my-app

# 2. Install dependencies
npm install

# 3. Run the frontend application
npm run dev
```

Your browser should automatically open to `http://localhost:3000`, where you can see the e-learning platform in action. The frontend will connect to the backend API running on port 5000.
