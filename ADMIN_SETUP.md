# 🔐 Admin Login Setup Guide

## Problem: Cannot Login
You need to create an admin user in the database first before you can login.

## Solution: Create Admin User

### Step 1: Make sure backend .env file exists

Create `backend/.env` file with:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_secret_key_change_this
NODE_ENV=development
```

### Step 2: Create Admin User

Run this command from the `backend` folder:

```bash
cd backend
node scripts/createAdmin.js opgehlot73@gmail.com op@123
```

**Replace:**
- `your@gmail.com` with your Gmail address
- `yourpassword` with your desired password

**Example:**
```bash
node scripts/createAdmin.js omprakash@gmail.com mypassword123
```

### Step 3: Start Backend Server

```bash
npm start
```

### Step 4: Login to Admin Panel

1. Go to: `http://localhost:5173/admin`
2. Enter your Gmail and password
3. Click Login
4. You'll be redirected to messages page where you can see all contact form submissions

## 📋 Quick Steps Summary

```bash
# 1. Navigate to backend
cd backend

# 2. Create admin user (replace with your Gmail and password)
node scripts/createAdmin.js your@gmail.com yourpassword

# 3. Start backend (if not running)
npm start

# 4. Open browser and go to:
http://localhost:5173/admin

# 5. Login with your Gmail and password
```

## 🗄️ View Database Information

After logging in, you'll see:
- All contact form messages
- Name, email, and message content
- Delete button for each message

## ⚠️ Important Notes

1. **First Time Setup**: You MUST create an admin user before logging in
2. **Password**: The password is hashed with bcrypt, so you need to use the script
3. **Gmail**: Use your Gmail address (e.g., yourname@gmail.com)
4. **Security**: Change the JWT_SECRET in .env to a random string in production

## 🔄 Update Password

If you want to change your password, just run the script again with the same email:

```bash
node scripts/createAdmin.js your@gmail.com newpassword
```

This will update the existing admin's password.
