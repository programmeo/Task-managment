const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");
const taskRoutes = require("./taskroute");


router.use("/auth", authRoutes);
router.use("/task", taskRoutes);

module.exports = router;
