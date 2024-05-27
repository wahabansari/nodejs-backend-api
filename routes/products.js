import express from "express";
import ProductList from "../modals/product.js";
import {
  handleAllProducts,
  handleCreateSingleUser,
  handleDeleteProduct,
  handleGetSingleUser,
  handleUpdateProduct,
} from "../controllers/product.js";

const router = express.Router();

// Get all Products Route
router.get("/", handleAllProducts);

// Create Single Product
router.post("/", handleCreateSingleUser);

// Get Single Product
router.get("/:id", handleGetSingleUser);

// Delete Product
router.delete("/:id", handleDeleteProduct);

// Update Product
router.patch("/:id", handleUpdateProduct);

export default router;
