import mongoose, { Mongoose } from "mongoose";

declare global {
  var mongoose: {
    conn: Mongoose | null;
  };
}

const { MONGODB_URI_DEVELOPMENT } = process.env;

if (!MONGODB_URI_DEVELOPMENT) {
  throw new Error(
    "Please define the MONGODB_URI_DEVELOPMEMT environment variable inside the .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

export const connectMongo = async () => {
  if (cached.conn) return cached.conn;
  cached.conn = await mongoose.connect(MONGODB_URI_DEVELOPMENT);

  console.log(cached.conn);

  return cached.conn;
};
