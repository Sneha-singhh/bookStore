import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bookRouter from "./route/book.route.js";
import userRouter from "./route/user.route.js";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000
const URI = process.env.MongoDb_URI

// connect to mongodb
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    // console.log("mongodb connected");
    
} catch (error) {
    console.log("Error : ", error);
    
}

// routes
app.use("/book",bookRouter)
app.use("/user",userRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})