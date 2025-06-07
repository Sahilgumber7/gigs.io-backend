import express from 'express';
import { createOrder, getUserOrders, updateOrderStatus } from '../controllers/orderController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createOrder);          // Create order
router.get('/', authMiddleware, getUserOrders);         // Get orders for logged-in user
router.put('/:id/status', authMiddleware, updateOrderStatus); // Update order status

export default router;
