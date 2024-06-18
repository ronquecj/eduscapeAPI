import express from 'express';
import { createRecord } from '../controllers/revenueRecords.controller.js';

const router = express.Router();

router.post('/record/:string', createRecord);

export default router;
