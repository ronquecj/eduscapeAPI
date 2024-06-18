import express from 'express';
import {
  createRecord,
  getRecord,
} from '../controllers/revenueRecords.controller.js';

const router = express.Router();

router.post('/record/:string', createRecord);
router.get('/record/:id', getRecord);

export default router;
