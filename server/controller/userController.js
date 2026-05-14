const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(404).json({
        message: `Please fill out all feilds`,
        success: false,
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: `User already exists`,
        success: false,
      });
    }
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
  } catch (error) {}
};

const login = async (req, res) => {};
