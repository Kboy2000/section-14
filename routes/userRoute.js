 const express = require('express'); // Imports Express
 const router = express.Router(); // Creates router
 const { registerUser, loginUser, getMe } = require('../controllers/userController'); // Imports controllers
 const { protect } = require('../middleware/authMiddleware'); // Imports middleware from authMiddleware

 
router.post('/register', registerUser); // Registration route 
router.post('/login', loginUser); // Login route
router.get('/me', protect, getMe); // Protected user data route 


module.exports = router; // Exports router
