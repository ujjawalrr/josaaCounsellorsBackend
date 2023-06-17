import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import adminRoute from "./routes/admin.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const PORT = process.env.PORT || 8800;

const app = express();

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: ["http://localhost:3000", "https://josaacounsellors.onrender.com", "https://josaacounsellors.onrender.com/contactUs", "https://josaacounsellors.onrender.com/register", "*"],
}))
app.use(cookieParser())
app.use("/auth", authRoute);
app.use("/admin", adminRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
    connect()
    console.log("Connected to backend!!")
})