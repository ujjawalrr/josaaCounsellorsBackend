import express from "express";
import { getAllUsers } from "../controllers/admin.js";

const router = express.Router();

router.get("/getAllUsers", getAllUsers)

export default router