# Quick Setup Guide

## ⚡ Fast Setup (3 Steps)

### Step 1: Install Dependencies
```bash
cd backend
npm install
```

### Step 2: Create `.env` File

Create `.env` in the `backend` folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

**For MongoDB Atlas:**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
NODE_ENV=development
```

### Step 3: Start Server
```bash
npm start
```

✅ Server running on `http://localhost:5000`

## 🗂️ Folder Structure

```
backend/
├── index.js              # Entry point
├── models/               # Database schemas
│   └── Contact.js
├── routes/               # API endpoints
│   └── contactRoutes.js
├── package.json          # Dependencies
└── .env                  # Config (create this)
```

## 🔗 Connecting to Frontend

The frontend (in `portfolio/` folder) is already configured to connect to:
- `http://localhost:5000/api` (development)
- Uses Vite proxy for API calls

## 📡 API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages
- `GET /api/contact/:id` - Get one message
- `GET /api/health` - Health check

## ✅ Verify It Works

```bash
# From backend folder
npm start

# In another terminal, test:
curl http://localhost:5000/api/health
```

You should see: `{"status":"OK","message":"Backend server is running",...}`
