import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from "../Controllers/OrderController.js";
import { protect } from "../Middleware/AuthMiddleware.js";

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
export default router;
