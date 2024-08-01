const express = require("express");
const {
  getAll,
  register,
  login,
  logout,
} = require("../controllers/authController");
const router = express.Router();

router.get("/all", getAll);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
