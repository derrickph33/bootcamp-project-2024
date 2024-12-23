import mongoose from "mongoose";

const url: string | undefined = process.env.MONGO_URI;

if (!url) {
  throw new Error("MONGO_URI environment variable is not defined.");
}

let isConnected = false; // Track the connection status

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing.
 * Call this function at the start of API routes and data fetches.
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async (): Promise<typeof mongoose> => {
  if (isConnected) {
    console.log("MongoDB is already connected.");
    return mongoose;
  }

  try {
    const connection = await mongoose.connect(url);
    isConnected = true;
    console.log("MongoDB connected successfully.");
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB.");
  }
};

export default connectDB;

