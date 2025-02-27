// db.js - MongoDB Connection with Improved Error Handling
const mongoose = require("mongoose");
const keys = require("./keys");

const connectDB = async () => {
  try {
    await mongoose.connect(keys.mongoURI, {});
    console.info("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

// Global error handlers
const exitHandler = () => {
  if (mongoose.connection.readyState !== 0) {
    mongoose.disconnect();
  }
  process.exit(1);
};

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  exitHandler();
});

process.on("unhandledRejection", (error) => {
  console.error("Unhandled Rejection:", error);
  exitHandler();
});
