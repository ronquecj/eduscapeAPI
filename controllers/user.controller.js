import User from '../models/user.model.js';
import createError from '../utils/createError.js';

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(
      createError(403, 'You can delete only your account!')
    );
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send('deleted.');
};

export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};

export const getU = async (id) => {
  const user = await User.findById(id);

  return user;
};

export const getForApprovalTutors = async (req, res, next) => {
  // if (req.params.string != 'accounts')
  //   res.status(404).send({ message: 'error', err: err.message });

  try {
    const tutors = await User.find({
      isSeller: true,
      isApproved: false,
    });
    res.status(200).send(tutors);
  } catch (err) {
    res.status(404).send({ message: 'error', err: err.message });
  }
};

export const approveTutor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const filter = { _id: id };
    const update = { isApproved: true };

    const approve = await User.findOneAndUpdate(filter, update, {
      new: true,
    });

    res.status(200).json(approve);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const uploadGcashQR = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { imgURL } = req.body;
    const filter = { _id: id };
    const update = { gcashQR: imgURL };

    const approve = await User.findOneAndUpdate(filter, update, {
      new: true,
    });

    res.status(200).json(approve);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
