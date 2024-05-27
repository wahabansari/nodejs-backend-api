import express from "express";
import ProductList from "../modals/product.js";

const router = express.Router();

// Get all Products Route
router.get("/", async (req, res) => {
  const allProducts = await ProductList.find({});
  res.json(allProducts);
  console.log(allProducts);
});

// Create Single Product
router.post("/", async (req, res) => {
  const { category, title, product_age, collection, discounted_price, price } =
    req.body;

  if (
    !category ||
    !title ||
    !product_age ||
    !collection ||
    !discounted_price ||
    !price
  ) {
    return res.json({ msg: "All fields are required!" });
  }

  const result = await ProductList.create({
    category,
    title,
    product_age,
    collection,
    discounted_price,
    price,
  });
  console.log(result);
  return res.status(201).json({ msg: "Product Added Successfully ..." });
});

// Get Single Product
router.get("/:id", async (req, res) => {
  const productId = await ProductList.findById(req.params.id);
  if (!productId) {
    res.status(500).json({ msg: `Product with Id  Not Found!` });
  }
  return res.status(200).json({ msg: `Product with Id Found!` });
});

// Delete Product
router.delete("/:id", async (req, res) => {
  const productId = await ProductList.findByIdAndDelete(req.params.id);
  if (!productId) {
    res.status(500).json({ msg: `Product with Id ${productId} not Found!` });
  }
  return res
    .status(200)
    .json({ msg: `Product with Id ${productId} Successfully Deleted!` });
});

// Update Product
router.patch("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedProduct = await ProductsList.findByIdAndUpdate(id, req.body, {
      new: true, // for updating we have to define this to ensure that new things are updating accordingly
    });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ message: "Success", updatedProduct });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});
export default router;
