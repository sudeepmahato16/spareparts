import { Router } from "express";
import { protect } from '@/controller/auth';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
} from "@/controller/product";

const productRouter = Router();


productRouter.route("/").post(protect, createProduct).get(getProducts);
productRouter.route("/:id").get(getProductById).delete(protect, deleteProduct);

export default productRouter