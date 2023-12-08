const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: './.env' });

const connectDB = async () => {
  try {
    await mongoose.connect("mongodblink");
    console.log("Database is connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB