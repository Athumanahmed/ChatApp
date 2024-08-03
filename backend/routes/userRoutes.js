const express = require("express");
const { getUserForSideBar } = require("../controllers/userController");
const { protectRoute } = require("../middleware/protectRoute");

const router = express.Router();

router.get("/", protectRoute, getUserForSideBar);
module.exports = router;
