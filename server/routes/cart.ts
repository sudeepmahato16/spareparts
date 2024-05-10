import { protect } from "@/controller/auth";
import { Router } from "express";
import { addToCart, getAllCartProducts, removeFromCart } from "@/controller/cart";

const cartRouter = Router();

cartRouter.use(protect);

cartRouter.route("/").post( addToCart).get(getAllCartProducts)
cartRouter.delete("/:id", removeFromCart);

export default cartRouter;
