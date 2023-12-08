const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: './.env' });

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://7twik:zKqW0UzgQO3G3iMy@cluster0.sjxr9uv.mongodb.net/qr");
    console.log("Database is connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB