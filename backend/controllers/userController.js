const User = require("../models/userModel");

const getUserForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');

    res.status(200).json({ count: allUsers.length, data: allUsers });
  } catch (error) {
    console.log("error in getuser chat controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getUserForSideBar,
};
