const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    // if no token
    if (!token) {
      return res.status(401).json({ error: "Not authorized , No token" });
    }

    // if there is a token

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Not authorized , invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protect route middleware", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

module.exports = {
  protectRoute,
};
