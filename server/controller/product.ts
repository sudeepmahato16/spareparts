import { catchAsync } from "@/utils/catchAsync";
import { db } from "@/app";
import AppError from "@/utils/appError";

export const createProduct = catchAsync(async (req, res, next) => {
  const { name, price, category, image } = req.body;

  if (!name || !price || !category || !image)
    throw new AppError("please provide all required data", 404);

  if (!req.user.isAdmin) throw new AppError("Unauthorized", 401);

  const product = await db.product.create({
    data: {
      name,
      price,
      category,
      image,
      sellerId: req.user.id,
    },
  });

  res.status(201).json({
    status: "success",
    data: {
      product,
    },
  });
});

export const deleteProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  if (!id) throw new AppError("Please provide product id", 404);

  if (!req.user.isAdmin) throw new AppError("Unauthorized", 401);

  await db.product.delete({
    where: {
      id,
    },
  });

  res.status(203).json({
    status: "success",
  });
});

export const getProducts = catchAsync(async (req, res, next) => {
  const { category } = req.query;

  let where: any = {};

  if (category) {
    where.category = category;
  }

  const products = await db.product.findMany({
    where,
  });

  res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
});

export const getProductById = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  if (!id) throw new AppError("Please provide product id", 401);

  const product = await db.product.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      price: true,
      image: true,
      category: true,
    },
  });

  res.status(203).json({
    status: "success",
    data: {
      product,
    },
  });
});
