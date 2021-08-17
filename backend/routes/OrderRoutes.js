import express from "express";
const router = express.Router();
import { addOrderItems, getOrderById } from "../Controllers/OrderController.js";
import { protect } from "../Middleware/AuthMiddleware.js";

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
export default router;
