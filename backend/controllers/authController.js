const User = require("../models/userModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  genereateTokenAndSetCookie,
} = require("../utils/generateTokenandCookies");

const getAll = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

const register = async (req, res) => {
  try {
    const { fullname, username, email, password, gender, confirmPassword } =
      req.body;

    if (!fullname || !username || !email || !password || !gender) {
      res.status(404);
      throw new Error("please add all fields");
    }
    if (password !== confirmPassword) {
      res.status(400).json({ error: "Passwords do not Match!" });
    }

    // check if user exist
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(404);
      throw new Error(`User with email ${email} already exist`);
    }

    // hashpassword
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run/

    const malePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femalePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const user = await User({
      fullname,
      username,
      email,
      password: hashedpassword,
      gender,
      profilePic: gender === "male" ? malePic : femalePic,
    });

    if (user) {
      // generate token here
      genereateTokenAndSetCookie(user._id, res);
      await user.save();

      res.status(201).json({
        user,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mesage: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const correctPassword = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !correctPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    genereateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: error.message,
    });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  getAll,
  register,
  login,
  logout,
};
