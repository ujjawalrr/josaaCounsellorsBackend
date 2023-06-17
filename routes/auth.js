import express from "express";
import { discount, register } from "../controllers/auth.js";
import { contactUs } from "../controllers/contactUs.js";

const router = express.Router();

router.post("/discount", discount)
router.post("/register", register)
router.post("/contactUs", contactUs)

export default router