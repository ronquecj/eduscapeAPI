import express from 'express';
import {
  createRecord,
  getRecord,
  getRecords,
} from '../controllers/revenueRecords.controller.js';

const router = express.Router();

router.post('/record/:string', createRecord);
router.get('/record/:id', getRecord);
router.get('/records/:id', getRecords);

export default router;
