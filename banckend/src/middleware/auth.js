const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {

    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decode.id).select("-password");
    next();

  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
