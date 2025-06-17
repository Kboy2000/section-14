const mongoose = require("mongoose"); // Imports Mongoose
const bcrypt = require("bcryptjs"); // Imports bcrypt for hashing

const userSchema = mongoose.Schema(
  {
    // Defines user schema
    name: {
      // Name field
      type: String, // String type
      required: [true, "Please add a name"], // Required with error message
    },
    email: {
      // Email field
      type: String, // String type
      required: [true, "Please add an email"], // Required
      unique: true, // Ensures unique email
      match: [/.+\@.+\..+/, "Please add a valid email"], // Validates email format
    },
    password: {
      // Password field
      type: String, // String type
      required: [true, "Please add a password"], // Required
      minlength: 6, // Minimum length
    },
  },
  { timestamps: true } // Adds timestamps
);

userSchema.pre("save", async function (next) {
  // Pre-save hook for password hashing
  if (!this.isModified("password")) {
    // Skips if password not modified
    next(); // Proceeds to next middleware
  }
  const salt = await bcrypt.genSalt(10); // Generates salt
  this.password = await bcrypt.hash(this.password, salt); // Hashes password
  next(); // Proceeds
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  // Method to compare passwords
  return await bcrypt.compare(enteredPassword, this.password); // Compares passwords
};

module.exports = mongoose.model("User", userSchema); // Exports User model
