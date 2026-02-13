# 🚀 How to Run the Project

## Prerequisites
- Node.js installed
- MongoDB running (local or Atlas)

## Step 1: Setup Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file with:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_secret_key_here
NODE_ENV=development

# Start backend server
npm start
```

Backend will run on: `http://localhost:5000`

## Step 2: Setup Frontend

```bash
# Navigate to portfolio folder (in a new terminal)
cd portfolio

# Install dependencies (if not done)
npm install

# Start frontend
npm run dev
```

Frontend will run on: `http://localhost:5173`

## Step 3: Run Both Together

From the `portfolio` folder:

```bash
npm run dev:all
```

This runs both frontend and backend concurrently.

## ✅ Verify Everything Works

1. Open browser: `http://localhost:5173`
2. Check backend: `http://localhost:5000/api/health`
3. Test contact form on the website

## 🔧 Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check your MONGODB_URI in backend/.env

### Port Already in Use
- Change PORT in backend/.env
- Or kill the process using port 5000

### Module Not Found
- Run `npm install` in both backend and portfolio folders
