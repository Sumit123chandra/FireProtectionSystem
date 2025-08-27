// lib/dbConnect.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

let isConnected = false;

export async function dbConnect() {
  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI, { dbName: "kc_fire_protection" });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
  }
}
