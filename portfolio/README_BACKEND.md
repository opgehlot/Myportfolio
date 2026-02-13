# Portfolio Backend Setup

This guide will help you set up the Node.js + Express.js backend with MongoDB for your portfolio.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB installed locally OR MongoDB Atlas account
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- express
- mongoose
- cors
- dotenv
- concurrently (for running frontend and backend together)

### 2. Set Up MongoDB

#### Option A: Local MongoDB

1. Install MongoDB on your machine
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   sudo systemctl start mongod
   ```

3. Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```

#### Option B: MongoDB Atlas (Cloud)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string
6. Create a `.env` file:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   NODE_ENV=development
   ```

### 3. Create .env File

Create a `.env` file in the root directory (`portfolio/.env`) with your configuration:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

**Important:** Never commit the `.env` file to Git. It's already in `.gitignore`.

### 4. Running the Application

#### Run Backend Only:
```bash
npm run dev:server
```

#### Run Frontend Only:
```bash
npm run dev
```

#### Run Both (Frontend + Backend):
```bash
npm run dev:all
```

The frontend will run on `http://localhost:5173` (Vite default)
The backend will run on `http://localhost:5000`

## API Endpoints

### Contact Form

- **POST** `/api/contact` - Submit a contact form message
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'd like to work with you!"
  }
  ```

- **GET** `/api/contact` - Get all contact messages (for admin)
- **GET** `/api/contact/:id` - Get a specific contact message by ID

### Health Check

- **GET** `/api/health` - Check if server is running

## Environment Variables for Frontend

If your backend runs on a different URL in production, create a `.env` file in the root or add to your build process:

```env
VITE_API_URL=http://localhost:5000/api
```

## Troubleshooting

### MongoDB Connection Issues

1. **Error: "MongoServerError: Authentication failed"**
   - Check your MongoDB credentials in the connection string
   - Ensure your IP is whitelisted (for Atlas)

2. **Error: "ECONNREFUSED"**
   - Make sure MongoDB is running
   - Check if the port is correct (default: 27017 for local)

3. **Error: "Cannot find module"**
   - Run `npm install` again
   - Delete `node_modules` and `package-lock.json`, then `npm install`

### CORS Issues

- The backend already has CORS enabled for all origins in development
- For production, update CORS settings in `server/index.js`

## Project Structure

```
portfolio/
├── server/
│   ├── index.js          # Express server entry point
│   ├── models/
│   │   └── Contact.js    # MongoDB schema for contact messages
│   └── routes/
│       └── contactRoutes.js  # API routes for contact form
├── src/                  # Frontend React app
├── .env                  # Environment variables (create this)
├── .env.example          # Example environment variables
└── package.json
```

## Next Steps

1. Test the contact form by submitting a message
2. Check MongoDB to see if data is being saved
3. Set up authentication if you want to protect admin routes
4. Add email notification when a new contact is received
5. Deploy to a hosting service (Heroku, Railway, Render, etc.)

## Production Deployment

1. Update CORS settings to allow only your frontend domain
2. Use environment variables for all sensitive data
3. Set up proper error logging
4. Use MongoDB Atlas or a managed MongoDB service
5. Configure SSL/HTTPS
6. Set up rate limiting for API endpoints
