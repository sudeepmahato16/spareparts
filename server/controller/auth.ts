import { NextFunction, Request, Response } from "express";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";

import { catchAsync } from "@/utils/catchAsync";
import AppError from "@/utils/appError";
import { db } from "@/app";

const signInToken = (id: string) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET_KEY!,
    {
      expiresIn: process.env.JWT_EXPIRES_IN!,
    }
  );
};

const createSendToken = (
  user: {
    name: string;
    email: string;
    id: string;
  },
  statusCode: number,
  res: Response
) => {
  const token = signInToken(user.id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + +process.env.COOKIE_EXPIRES_IN! * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.cookie("spareparts", token, cookieOptions);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

export const signUp = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, name } = req.body;

    if (!email || !password || !name)
      return next(new AppError("Please provide email or password!", 404));

    const isEmailInUse = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (isEmailInUse) return next(new AppError("Email is in use", 401));

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
      select: {
        email: true,
        name: true,
        id: true,
      },
    });

    createSendToken(user, 201, res);
  }
);

export const signIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new AppError("Please provide us email or password", 404));

  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) return next(new AppError("User not found!", 404));

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect)
    return next(new AppError("Incorrect email or password", 401));

  createSendToken(
    {
      id: user.id,
      email: user.email,
      name: user.name,
    },
    200,
    res
  );
});

export const protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies?.["spareparts"]) {
    token = req.cookies?.["spareparts"];
  }

  if (!token)
    return next(
      new AppError("You are not logged in. please log in to get access.", 401)
    );

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!) as {
    id: string;
  };

  const currentUser = await db.user.findUnique({
    where: {
      id: decoded.id,
    },
  });

  if (!currentUser)
    return next(
      new AppError("The token belonging to user does not exist!", 401)
    );

  /* @ts-ignore */
  req.user = currentUser;

  next();
});
