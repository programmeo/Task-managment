const mongoose = require("mongoose");

const mongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
    console.log("DB Connected");
  } catch (error) {
    console.error("Database Connection Error", error);
    process.exit(1);
  }
};

module.exports = mongoDb;
