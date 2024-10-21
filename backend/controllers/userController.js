import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const signup = async (req, res) => {
  const { name, email, password, age, gender } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hashedPassword, age, gender });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// CRUD Operations for User
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate('trainer workoutPlan diet');
    res.json(users);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('trainer workoutPlan diet');
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json({ msg: 'User deleted' });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
