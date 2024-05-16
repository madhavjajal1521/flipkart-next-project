import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.DB_URI}`);
    console.log("connected to mongoDB from connstr");
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectMongoDB;
