const jwt = require("jsonwebtoken"); // Imports JWT
const asyncHandler = require("express-async-handler"); // Imports asyncHandler
const User = require("../models/userModel"); // Imports User model

const protect = asyncHandler(async (req, res, next) => {
  // Protects routes
  let token; // Declares token variable
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Checks for Bearer token
    try {
      // Starts try block
      token = req.headers.authorization.split(" ")[1]; // Extracts token
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifies token
      req.user = await User.findById(decoded.id).select("-password"); // Finds user
      if (!req.user) {
        // If user not found
        res.status(401).json({
          status: "error", // Sets response status
          message: "Not authorised, user not found", // Error message
        }); // Throws error
      }
      next(); // Proceeds
    } catch (error) {
      // Catches errors
      res.status(401).json({
        status: "error", // Sets response status
        message: "Not authorised, token failed", // Error message
      }); // Throws error
    }
  } else {
    // If no token
    res.status(401).json({
      status: "error", // Sets response status
      message: "Not authorised, no token", // Error message
    }); // Throws error
  }
});

module.exports = { protect }; // Exports middleware
