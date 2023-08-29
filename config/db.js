const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/verve");

    console.log("MongoDB Connection Success 👍");
  } catch (error) {
    console.log("MongoDB Connection Failed 💥");
    process.exit(1);
  }
};

module.exports = connectDB;