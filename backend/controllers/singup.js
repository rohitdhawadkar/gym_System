import bcrypt from 'bcryptjs';
import User from '../models/User.js';

// Signup Logic
export const signup = async (req, res) => {
  const { name, email, password, age, gender } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    user = new User({
      name,
      email,
      password: hashedPassword,
      age,
      gender,
    });

    await user.save();

    // Respond with the created user
    res.status(201).json({ msg: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error' });
  }
};
export default signup;
// Login Logic

