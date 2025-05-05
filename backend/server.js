import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from './routes/post.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'https://pro-connect-linkedin-clone-cb1jrssvq-kumarshubhhs-projects.vercel.app',
  'https://pro-connect-linkedin-clone-eight.vercel.app',
  'https://pro-connect-linkedin-clone-gwwl3ef39-kumarshubhhs-projects.vercel.app/'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('❌ Blocked CORS origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);
app.use(express.static('uploads'));

const start = async () => {
  const connectDB = await mongoose.connect("mongodb+srv://subhanshukumar290:Shubh@linkedin.xps8o.mongodb.net/?retryWrites=true&w=majority&appName=Linkedin");
  console.log("✅ Connected to MongoDB");

  app.listen(9090, () => {
    console.log("🚀 Server is running on port 9090");
  });
};

start();
