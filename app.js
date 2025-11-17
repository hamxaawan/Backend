import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import createError from "http-errors";
import connectDB from "./config/db-connection.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/api/user", userRouter); 
// Now the full path becomes /api/user/create

// Catch 404
app.use((req, res, next) => {
    next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

// Connect DB and start server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});

export default app;
