import { json } from "express";
import User from '../model/user.modal.js';
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" }); 
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashedPassword, 
    });

    await createdUser.save();

   
    res.status(201).json({ message: "User created successfully",user:{
        _id:createdUser._id,
        fullname:createdUser.fullname,
        email:createdUser.email
    } });

  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔍 1. Find user by email
    const user = await User.findOne({ email }); // ❌ You had double curly braces here

    // 🚫 If user doesn't exist
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // 🔐 2. Compare password
    const isMatch = await bcryptjs.compare(password, user.password); // ❌ You forgot 'await' before bcrypt.compare

    // ❌ If password doesn't match
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // ✅ If everything is OK
    return res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email
      }
    });

  } catch (error) {
    console.error("Login error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};



