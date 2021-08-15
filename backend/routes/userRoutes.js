import express from "express";
import { protect } from "../Middleware/AuthMiddleware.js";
import {
  authUser,
  registerUser,
  getUserProfile,
} from "../Controllers/userController.js";

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
