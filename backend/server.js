import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import postRoutes from './routes/post.routes.js'
import userRoutes from './routes/user.routes.js'


dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(postRoutes)
app.use(userRoutes)
app.use(express.static('uploads'))
const start = async() =>{
    const connectDB = await mongoose.connect("mongodb+srv://subhanshukumar290:Shubh@linkedin.xps8o.mongodb.net/?retryWrites=true&w=majority&appName=Linkedin")
    console.log( "connected to db")

    app.listen(9090, () =>{
        console.log("server is listings ")

    })
}

start();