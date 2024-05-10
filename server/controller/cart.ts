import { db } from "@/app";
import AppError from "@/utils/appError";
import { catchAsync } from "@/utils/catchAsync";

export const addToCart = catchAsync(async (req, res, next) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity)
    throw new AppError("Please provide product id and quantity", 404);

  if (!req.user) throw new AppError("Unauthorized", 401);

  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) throw new AppError("Product not found!", 404);

  const cartItem = await db.cart.create({
    data: {
      productId: product.id,
      quantity,
      userId: req.user.id,
    },
  });

  res.status(201).json({
    status: "success",
    data: {
      cartItem,
    },
  });
});

export const removeFromCart = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  if (!id) throw new AppError("Id not found", 404);
  if (!req.user) throw new AppError("Unauthorized", 401);

  await db.cart.delete({
    where: {
      id,
    },
  });

  res.status(204).json({
    status: "success",
  });
});

export const getAllCartProducts = catchAsync(async (req, res, next) => {
  if (!req.user) throw new AppError("Unauthorized", 401);

  const cartItems = await db.cart.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      product: true,
    },
  });

  res.status(200).json({
    status: "success",
    data: {
      cartItems,
    },
  });
});
