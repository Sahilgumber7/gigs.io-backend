import express from 'express';
import {
  createGig,
  getAllGigs,
  getGigById,
  deleteGig
} from '../controllers/gigController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createGig);
router.get('/', getAllGigs);
router.get('/:id', getGigById);
router.delete('/:id', authMiddleware, deleteGig);

export default router;
