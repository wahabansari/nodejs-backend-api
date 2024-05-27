import mongoose from "mongoose";

// Creating DB connections and it will return a promise
async function connectToDatabse(url) {
  return await mongoose.connect(url);
}

export default connectToDatabse;
