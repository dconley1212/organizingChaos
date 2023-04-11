import mongoose, { Connection } from "mongoose";

interface MongooseInstance {
  connection: Connection;
}

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: MongooseInstance;
    }
  }
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside the .env.local"
  );
}

// let cached: MongooseInstance | undefined = global.mongoose

// if(!cached){
//     cached = { connection: mongoose.createConnection(MONGODB_URI)};
//     global.mongoose = cached
// }
