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

export const getRecord = async (req, res, next) => {
  try {
    const gig = await RevenueRecords.findById(req.params.id);
    res.status(200).send(gig);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRecords = async (req, res, next) => {
  try {
    const gigs = await RevenueRecords.find({ isApproved: false });
    res.status(200).send(gigs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllRecords = async (req, res, next) => {
  try {
    const gigs = await RevenueRecords.find();
    res.status(200).send(gigs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const approvePayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const filter = { _id: id };
    const update = { isApproved: true };

    const approve = await RevenueRecords.findOneAndUpdate(
      filter,
      update,
      {
        new: true,
      }
    );

    res.status(200).json(approve);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
