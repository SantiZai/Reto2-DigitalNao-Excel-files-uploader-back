import mongoose from "mongoose";

// connection to db
const connectDb = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error(err));
  } catch (err) {
    console.error(`Error to connect with MongoDB: ${err.message}`);
    process.exit(1);
  }
};

export default connectDb;
