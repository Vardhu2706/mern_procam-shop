import mongoose from "mongoose";

const connectDB = async () => {
  console.log("Trying to establish connection...");
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.black.bgGreen);
  } catch (error) {
    console.log(`Error: ${error.message}`.black.bgRed);
    process.exit(1);
  }
};

export default connectDB;
