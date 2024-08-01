const express = require("express");
const { getUserChats } = require("../controllers/userController");
const { protectRoute } = require("../middleware/protectRoute");

const router = express.Router();

router.get('/',protectRoute,getUserChats)
module.exports = router;
