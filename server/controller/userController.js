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

const login = async (req, res) => {
  try { 
    const {email, password} = req.body;

    if (!user || !password){
      return res.status(400).json({
        message: "Please fill all the feilds",
        success: false,
      });
    }

    // find user

    const user = await user.findOne({email});

    if (!user){
      return res.status(404).json({
        message: "user not found",
        success: false,
      });
    }

    // validate password 

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      return res.status(400).json({
        message: "invalid password",
        success: false,
      });
    }

    return res.status(200).json({
      message: "login successfull",
      success: true,
      user,
    })
  }catch (error) {
    return res.status(500).json({
      message: "server error",
      success: false,
    });
  }
};
