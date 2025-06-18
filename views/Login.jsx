// import React, { useState } from "react"; // Imports React and useState
// import axios from "axios"; // Imports axios for API calls

// const Login = () => {
//   // Defines Login component
//   const [email, setEmail] = useState(""); // State for email
//   const [password, setPassword] = useState(""); // State for password
//   const [error, setError] = useState(""); // State for error message

//   const handleSubmit = async (e) => {
//     // Handles form submission
//     e.preventDefault(); // Prevents default form behavior
//     try {
//       // Starts try block
//       const res = await axios.post("/api/users/login", { email, password }); // Sends login request
//       localStorage.setItem("token", res.data.token); // Stores token
//       window.location.href = "/profile"; // Redirects to profile
//     } catch (err) {
//       // Catches errors
//       setError(err.response?.data?.message || "Login failed"); // Sets error message
//     }
//   };
//   return (
//     // Returns JSX
//     <div className="container">
//       <h2>Login</h2> {/* Page title */}
//       {error && <p className="error">{error}</p>} {/* Displays error */}
//       <form onSubmit={handleSubmit}>
//         {" "}
//         {/* Form with submit handler */}
//         <div>
//           <label>Email:</label> {/* Email label */}
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} // Updates email state
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label> {/* Password label */}
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} // Updates password state
//             required
//           />
//         </div>
//         <button type="submit">Login</button> {/* Submit button */}
//       </form>
//       <p>
//         Don't have an account? <a href="/signup">Signup</a> {/* Signup link */}
//       </p>{" "}
//     </div>
//   );
// };

// export default Login; // Exports component
