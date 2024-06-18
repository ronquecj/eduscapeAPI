import express from 'express';
import {
  approveTutor,
  deleteUser,
  getForApprovalTutors,
  getUser,
  uploadGcashQR,
} from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.get('/accounts/:string', getForApprovalTutors);
router.post('/approve/:id', approveTutor);
router.post('/upload-gcash/:id', uploadGcashQR);
router.delete('/:id', verifyToken, deleteUser);
router.get('/:id', verifyToken, getUser);

export default router;
