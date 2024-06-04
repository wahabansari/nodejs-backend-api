import express from "express";
import connectToDatabse from "./connection.js";
import productRouter from "./routes/products.js";
import userRouter from "./routes/users.js";

const app = express();
const PORT = 8000;

// Creating DB connections
connectToDatabse("mongodb://localhost:27017/Products")
  .then((res) => console.log("Connection Successsfull"))
  .catch((err) => console.log(err));

// Creating Middle
app.use(express.urlencoded({ extended: false }));

// Middleware to use the product router for both purposes
app.use("/products", productRouter);
app.use("/api/products", productRouter);

// For User Signup
app.use("/signup", userRouter);

app.listen(PORT, () => {
  console.log("Server Running");
});
