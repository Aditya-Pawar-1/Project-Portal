const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to database");
    
  } catch (err) {
    console.error("Couldn't connect to database", err.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
