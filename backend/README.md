# Portfolio Backend API

**Separate Backend Server** for Portfolio website built with Node.js, Express.js, and MongoDB.

## 📁 Project Structure

```
Test/
├── portfolio/          # Frontend React App
└── backend/            # Backend API (This folder - Separate Project)
    ├── index.js        # Main server file
    ├── models/         # MongoDB models
    │   └── Contact.js
    ├── routes/         # API routes
    │   └── contactRoutes.js
    ├── package.json    # Backend dependencies
    ├── .env            # Environment variables (create this)
    └── README.md       # This file
```

## 🚀 Quick Start

### 1. Navigate to Backend Folder

```bash
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the `backend` folder:

**For Local MongoDB:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

**For MongoDB Atlas (Cloud):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
NODE_ENV=development
```

### 4. Start the Server

```bash
npm start
```

Server will run on `http://localhost:5000`

## 📡 API Endpoints

### Contact Form

- **POST** `/api/contact` - Submit a contact message
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello!"
  }
  ```

- **GET** `/api/contact` - Get all contact messages
- **GET** `/api/contact/:id` - Get specific contact message

### Health Check

- **GET** `/api/health` - Check server status
- **GET** `/` - API information

## 🔧 Technologies

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 🎯 Running Both Frontend & Backend

Since backend is now a **separate project**, you have two options:

### Option 1: Run Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd portfolio
npm run dev
```

### Option 2: Use the Script (from portfolio folder)

```bash
cd portfolio
npm run dev:all
```

This will run both frontend and backend concurrently.

## 📝 Notes

- ✅ Backend is **completely separate** from frontend
- ✅ Each project has its own `package.json` and dependencies
- ✅ Backend can be deployed independently
- ✅ Frontend communicates with backend via API calls
- ⚠️ Make sure MongoDB is running before starting the server
- ⚠️ Never commit `.env` file to Git

## 🔍 Testing

```bash
# Check if server is running
curl http://localhost:5000/api/health

# Test contact endpoint
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Hello!"}'
```
