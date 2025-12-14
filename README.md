# Project Setup Guide

This README explains how to **clone the repository**, **set up the project locally**, and **run the application** on your machine.

---

## Prerequisites

Make sure you have the following installed on your system:

* **Git** (to clone the repository)
* **Node.js** (v18 or above recommended)
* **npm** (comes with Node.js)
* **MongoDB** (local MongoDB or MongoDB Atlas account)

Check installation:

```bash
node -v
npm -v
git --version
```

---

## Clone the Repository

Open a terminal and run:

```bash
git clone <REPOSITORY_URL>
cd <PROJECT_FOLDER_NAME>
```

Replace `<REPOSITORY_URL>` with the actual GitHub repository URL.

---

## Project Structure

```text
project-root/
├── backend/
│   ├── src/
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   └── package.json
└── README.md
```

---

## Backend Setup

### 1. Navigate to Backend Directory

```bash
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend` directory and add:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

> Replace `your_mongodb_connection_string` with your MongoDB Atlas or local MongoDB URI.

### 4. Run Backend Server

```bash
npm start
```

or (if using nodemon):

```bash
npm run dev
```

Backend will run at:

```
http://localhost:8080
```

---

## Frontend Setup

### 1. Navigate to Frontend Directory

Open a new terminal and run:

```bash
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables (Optional)

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:8080
```

### 4. Run Frontend Application

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## Running the Application

1. Start **MongoDB** (local or Atlas)
2. Start **Backend Server**
3. Start **Frontend Application**
4. Open browser and visit:

```
http://localhost:5173
```

---

## Common Issues

* **MongoDB connection error** → Verify `MONGO_URI`
* **Port already in use** → Change `PORT` in `.env`
* **CORS error** → Ensure backend CORS configuration allows frontend URL

---

## Technologies Used

* Node.js
* Express.js
* MongoDB + Mongoose
* React
* Material UI (MUI)

---

## Author

Anjali Jain

---

## License

This project is for educational purposes.
