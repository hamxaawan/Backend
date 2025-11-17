import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,  // remove quotes around type
    required: true,
  },
  email: {
    type: String,  // remove quotes around type
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
});

// Create and export the model
const User = mongoose.model("User", userSchema);
export default User;
