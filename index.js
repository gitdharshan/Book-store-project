import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import booksRoute from './routes/booksRoutes.js';
import cors from 'cors';

dotenv.config(); // Load environment variables from .env file

const app = express(); // Define the app BEFORE using it
const PORT = 8004;
const mongoDBURL = process.env.mongo_connection;

// Middleware to parse JSON and enable CORS
app.use(cors());
app.use(express.json());

// Define routes
app.use('/book', booksRoute);

// Connect to MongoDB
mongoose
  .connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database successfully");

    // Start the server
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });
