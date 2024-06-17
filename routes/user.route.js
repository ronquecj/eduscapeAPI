import express from 'express';
import {
  deleteUser,
  getForApprovalTutors,
  getUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.get('/accounts/:string', getForApprovalTutors);
router.delete('/:id', verifyToken, deleteUser);
router.get('/:id', verifyToken, getUser);

export default router;
