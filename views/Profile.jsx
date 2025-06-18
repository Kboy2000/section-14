import React, { useState, useEffect } from "react"; // Imports React, useState, useEffect
import axios from "axios"; // Imports axios

const Profile = () => {
  // Defines Profile component
  const [user, setUser] = useState(null); // State for user data
  const [error, setError] = useState(""); // State for error
  useEffect(() => {
    // Runs on component mount
    const fetchUser = async () => {
      // Fetches user data
      try {
        // Starts try block
        const token = localStorage.getItem("token"); // Gets token
        if (!token) throw new Error("No token found"); // Checks for token
        const res = await axios.get("/api/users/me", {
          // Sends request
          headers: { Authorization: `Bearer ${token}` }, // Includes token
        });
        setUser(res.data); // Sets user data
      } catch (err) {
        // Catches errors
        setError(err.response?.data?.message || "Failed to load profile"); // Sets error
      }
    };

    fetchUser(); // Calls fetch function
  }, []); // Empty dependency array

  const handleLogout = () => {
    // Handles logout
    localStorage.removeItem("token"); // Removes token
    window.location.href = "/login"; // Redirects to login
  };

  if (error)
    return (
      <div className="container">
        <p className="error">{error}</p>
      </div>
    ); // Shows error

  if (!user) return <div className="container">Loading...</div>; // Shows loading
  return (
    // Returns JSX
    <div className="container">
      <h2>Profile</h2> {/* Page title */}
      <p>Name: {user.name}</p> {/* Displays name */}
      <p> Email: {user.email} </p> {/* Displays email */}
      <button onClick={handleLogout}>Logout</button> {/* Logout button */}
    </div>
  );
};

export default Profile; // Exports component
