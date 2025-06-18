const mongoose = require("mongoose"); // Imports Mongoose for MongoDB

const connectDB = async () => {
  // Defines async function to connect to MongoDB
  try {
    // Starts try block for error handling
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Connects to MongoDB
      useNewUrlParser: true, // Uses new URL parser
      useUnifiedTopology: true, // Uses new topology engine
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`); // Logs successful connection
  } catch (error) {
    console.error(`Error: ${error.message}`); // Logs error message
    setInterval(connectDB, 5000); // Retries connection every 5 seconds
  }
};

module.exports = connectDB; // Exports connectDB function
