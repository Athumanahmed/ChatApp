import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
  try {
    // Check if token exists
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: No token provided" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by ID decoded from token
    const user = await User.findOne({ _id: decoded.userId }).select(
      "-password"
    );

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Attach user to the request object
    req.user = user;

    // Proceed to the next middleware
    next();
  } catch (error) {
    console.error("Error in the protect route middleware:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export default protectRoute;
