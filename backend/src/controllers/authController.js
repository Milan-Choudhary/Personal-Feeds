import { sign } from 'jsonwebtoken';
import User from '../models/User.js';
import { JWT_SECRET } from '../config/env.js';

export async function signUp(req, res, next) {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
}

export async function signIn(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    next(err);
  }
}
