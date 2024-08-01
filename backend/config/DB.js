const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`CONNECTED TO THE DATABASE.`.bgYellow);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
