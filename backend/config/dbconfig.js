import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default ConnectDB;
