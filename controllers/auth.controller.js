import User from '../models/user.model.js';
import createError from '../utils/createError.js';
import bcrypt from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(10)
    );
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send('User has been created.');
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, 'User not found!'));

    const isCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isCorrect)
      return next(createError(400, 'Wrong password or username!'));
    const token = jwt.sign(
      { id: user._id, isSeller: user.isSeller },
      process.env.JWT_KEY
    );
    console.log(token);
    const { password, ...info } = user._doc;
    res
      .cookie('accessToken', token, { secure: true })
      .status(200)
      .send(info);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const logout = async (req, res) => {
  try {
    res
      .clearCookie('accessToken', { sameSite: 'none', secure: true })
      .status(200)
      .send('User has been logout.');
  } catch (err) {
    next(err);
  }
};
