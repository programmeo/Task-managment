const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//register endpoint
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = await req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ messsage: "registered successfully", token: jwt.sign({ id: user._id }, process.env.JWT_SECRET) });
  } catch (error) {
    res.status(400).json({ error: "Registration failed", details: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user || (await user.comparpass(password))) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.status(200).json({ token });
    }
  } catch (error) {
    res.status(400).json({ error: "Login failed", details: error });
  }
});

module.exports = router;
