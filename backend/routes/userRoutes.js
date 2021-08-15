import express from "express";
import { protect } from "../Middleware/AuthMiddleware.js";
import { authUser, getUserProfile } from "../Controllers/userController.js";

const router = express.Router();

router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
