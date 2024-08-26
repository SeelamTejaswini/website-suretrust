const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  const { fullName, email, phone, gender, qualifications, college, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      fullName,
      email,
      phone,
      gender,
      qualifications,
      college,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  // Implement login logic
};
