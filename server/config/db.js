import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sanjupatel:sanju1982000@cluster0.whazps0.mongodb.net/Zomato"
    );
    console.log("connected to Mongodb");
  } catch (error) {
    console.log("Error: din't connect to Mongodb");
  }
};

export default connectDb;
