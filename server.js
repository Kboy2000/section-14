const express = require("express"); // Imports Express
const dotenv = require("dotenv").config(); // Loads .env
const connectDB = require("./config/db"); // Imports DB connection
const path = require("path"); // Imports path for file handling
const erv = require("express-react-views"); // Imports express-reactviews

connectDB(); // Connects to MongoDB

const app = express(); // Creates Express app
app.set("views", path.join(__dirname, "views")); // Sets views directory
app.set("view engine", "jsx"); // Sets JSX as view engine
app.engine("jsx", erv.createEngine()); // Configures express-react-views
app.use(express.json()); // Parses JSON
app.use(express.urlencoded({ extended: false })); // Parses URL-encoded data
app.use(express.static(path.join(__dirname, "public"))); // Serves static files
app.use("/api/users", require("./routes/userRoute")); // Mounts API routes
app.get("/", (req, res) => res.render("Home")); // Renders Home page
app.get("/login", (req, res) => res.render("Login")); // Renders Login page
app.get("/signup", (req, res) => res.render("Signup")); // Renders Signup page
app.get("/profile", (req, res) => res.render("Profile")); // Renders Profile page

const PORT = process.env.PORT || 5000; // Sets port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Starts server
