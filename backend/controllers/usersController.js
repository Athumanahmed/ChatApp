import User from "../models/userModel.js";
export const getUsers = async (req, res) => {
  try {
    const loggedInuser = req.user._id;

    // const allUsers = await User.find({});

    const filteredUsers = await User.find({
      _id: { $ne: loggedInuser },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in get users controller", error.message);
    res.status(500).json({ error: "internal sever Error" });
  }
};
