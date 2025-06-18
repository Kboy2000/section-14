import React, { useState } from "react"; // Imports React and useState
import axios from "axios"; // Imports axios

const Signup = () => {
  // Defines Signup component
  const [name, setName] = useState(""); // State for name
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error

  const handleSubmit = async (e) => {
    // Handles form submission
    e.preventDefault(); // Prevents default behavior
    try {
      // Starts try block
      const res = await axios.post("/api/users/register", {name, email, password, }); // Sends signup request
      localStorage.setItem("token", res.data.token); // Stores token
      window.location.href = "/profile"; // Redirects to profile
    } catch (err) {
      // Catches errors
      setError(err.response?.data?.message || "Signup failed"); // Sets error;
    }
  };

  return (
    // Returns JSX
    <div className="container">
      <h2>Signup</h2> {/* Page title */}
      {error && <p className="error">{error}</p>}{" "} {/* Displays error*/}
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Form with submit handler */}
        <div>
          <label>Name:</label> {/* Name label */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Updates name
            state
            required
          />
        </div>
        <div>
          <label>Email:</label> {/* Email label */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Updates email
            state
            required
          />
        </div>
        <div>
          <label>Password:</label> {/* Password label */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Updates
            password
            state
            required
          />
        </div>
        <button type="submit">Signup</button> {/* Submit button */}
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>{" "}{/* Login link */}
    </div>
  );
};

export default Signup; // Exports component
