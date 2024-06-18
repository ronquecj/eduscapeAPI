import express from 'express';
import {
  approvePayment,
  createRecord,
  getRecord,
  getRecords,
} from '../controllers/revenueRecords.controller.js';

const router = express.Router();

router.post('/record/:string', createRecord);
router.get('/record/:id', getRecord);
router.get('/records/:id', getRecords);
router.poost('/approve/:id', approvePayment);

export default router;
