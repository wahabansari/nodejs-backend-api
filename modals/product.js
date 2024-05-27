import mongoose from "mongoose";

// Creating Schemes for DB
const productScheme = new mongoose.Schema(
  {
    category: { type: String },
    title: { type: String },
    product_age: { type: Number }, // Change to Number if product_age should hold numerical values
    collection: { type: String },
    discounted_price: { type: Number }, // Change to Number if discounted_price should hold numerical values
    price: { type: Number }, // Change to Number if price should hold numerical values
  },
  { timestamps: true }
);

// Now after Definning Scheme we need to create a modal
const ProductsList = mongoose.model("products", productScheme);
export default ProductsList;
