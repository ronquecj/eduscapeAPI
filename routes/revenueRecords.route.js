import express from 'express';
import {
  approvePayment,
  createRecord,
  getAllRecords,
  getRecord,
  getRecords,
} from '../controllers/revenueRecords.controller.js';

const router = express.Router();

router.post('/record/:string', createRecord);
router.get('/record/:id', getRecord);
router.get('/records/:id', getRecords);
router.get('/all/:string', getAllRecords);
router.post('/approve/:id', approvePayment);

export default router;
