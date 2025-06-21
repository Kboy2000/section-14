import React, { useState } from "react"; // Imports React and useState
import axios from "axios"; // Imports axios for API calls
// If you use react-router-dom for navigation, uncomment the next line:
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate(); // Uncomment if using react-router-dom
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error message

  const handleSubmit = async (e) => {
    // Handles form submission
    e.preventDefault(); // Prevents default form behavior
    setError(""); // Clear previous errors
    try {
      // Starts try block
      const res = await axios.post("/api/users/login", { email, password }); // Sends login request
      localStorage.setItem("token", res.data.token); // Stores token
      // Use SPA navigation if using react-router-dom:
      // navigate("/profile");
      window.location.href = "/profile"; // Redirects to profile
    } catch (err) {
      // Catches errors
      setError(err.response?.data?.message || "Login failed"); // Sets error message
    }
  };

  return (
    // Returns JSX
    <div className="container">
      <h2>Login</h2> {/* Page title */}
      {error && <p className="error">{error}</p>} {/* Displays error */}
      <form onSubmit={handleSubmit} autoComplete="off">
        {" "}
        {/* Form with submit handler */}
        <div>
          <label htmlFor="email">Email:</label> {/* Email label */}
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(""); // Clear error on input
            }} // Updates email state
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label> {/* Password label */}
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(""); // Clear error on input
            }} // Updates password state
            required
          />
        </div>
        <button type="submit">Login</button> {/* Submit button */}
      </form>
      <p>
        Don't have an account? <a href="/signup">Signup</a> {/* Signup link */}
      </p>{" "}
    </div>
  );
};

export default Login; // Exports component
