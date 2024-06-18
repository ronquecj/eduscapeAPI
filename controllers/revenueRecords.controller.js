import RevenueRecords from '../models/revenueRecords.model.js';

export const createRecord = async (req, res, next) => {
  try {
    const newPayment = new RevenueRecords({
      ...req.body,
    });

    await newPayment.save();
    res.status(201).send('A new payment has been recorded.');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
