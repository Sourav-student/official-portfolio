import mongoose from "mongoose";

const DB_URI: string = process.env.DB_URI ?? "";
if (!DB_URI) {
  throw new Error("DB_URI environment variable is not set.");
}

let isConnected = false;

export async function connectDb() {
  if (isConnected) return;
  await mongoose.connect(DB_URI);
  isConnected = true;
}