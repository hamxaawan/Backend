import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database Connected");
  } catch (err) {
    console.error("Database Connection Error:", err);
    process.exit(1);
  }
};

export default db;
