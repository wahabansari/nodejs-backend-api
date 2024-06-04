import express from "express";
import { handleUserSignp } from "../controllers/user.js";

const router = express.Router();

/* ===================== Creating New Routes For User Authenthication ===================== */
router.post("/signup", handleUserSignp);

export default router;
