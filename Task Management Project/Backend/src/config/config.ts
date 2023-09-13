import mongoose from "mongoose";
import { MONGODB_URI } from "./index";

const db = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI, {});
    console.log("MongoDB connected ");
  } catch (err) {
    console.error(`MongoDB  error: ${err}`);
    process.exit(1);
  }
};
export default db;
