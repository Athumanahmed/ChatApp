const express = require("express");
const {
  sendMessage,
  getMessages,
} = require("../controllers/messageController");
// const { protectRoute } = require("../middleware/protectRoute");
const router = express.Router();

router.get("/:id", getMessages);
router.post("/send/:id", sendMessage);

module.exports = router;
