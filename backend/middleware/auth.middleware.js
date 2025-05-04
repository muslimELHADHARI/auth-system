const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

exports.protect = async (req, res, next) => {
  let token

  // Check for token in headers
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1]
  }
  // Check for token in cookies
  else if (req.cookies.token) {
    token = req.cookies.token
  }

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" })
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Get user from token
    req.user = await User.findById(decoded.id).select("-password")

    next()
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token failed" })
  }
}
