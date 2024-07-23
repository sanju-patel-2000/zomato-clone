import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// create token
const createToken = (id) => {
  const secret = "my_secret_key";
  return jwt.sign({ id }, secret);
};

// user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid password" });
    }

    const token = createToken(user._id);

    res
      .status(200)
      .json({ success: true, message: "You are eligible for login!", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Data validation
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    // Check for existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Email validation
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Please enter a valid email" });
    }

    // isStrong password
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Please enter a strong password" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    // Respond with success message (or user data)
    res.json({ success: true, message: "Registration successful!", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export { loginUser, registerUser };
