import express from "express";
import { register } from "../controllers/auth.js";
import { contactUs } from "../controllers/contactUs.js";

const router = express.Router();

router.post("/register", register)
router.post("/contactUs", contactUs)

export default router