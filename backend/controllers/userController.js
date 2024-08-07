const User = require("../models/userModel");

const getUserForSideBar = async (req, res) => {
  try {
    const loggedInUserId = JSON.parse(req.headers.userinfo);

    const allUsers = await User.find({
      _id: { $ne: loggedInUserId._id },
    }).select("-password");

    res.status(200).json({ count: allUsers.length, data: allUsers });

    console.log(allUsers);
  } catch (error) {
    console.log("error in getuser chat controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getUserForSideBar,
};
