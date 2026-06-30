import User from '../models/User.js';

export async function getUser(req, res, next) {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function updateUser(req, res, next) {
  try {
    const user = await User.findByIdAndUpdate(req.userId, req.body, { new: true }).select('-password');
    res.json(user);
  } catch (err) {
    next(err);
  }
}
