import { createUser, getAllUser, updateUser, deleteUser } from "../Controllers/userController.js";
import express from "express";

const router = express.Router();

// Only the endpoint part, without /api/user/create
router.post("/create", createUser);
router.get("/all", getAllUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
