import express from 'express';
import {
  getCurrentUser,
  updateProfile,
  getUserById
} from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/me', authMiddleware, getCurrentUser);
router.put('/me', authMiddleware, updateProfile);
router.get('/:id', getUserById);

export default router;
