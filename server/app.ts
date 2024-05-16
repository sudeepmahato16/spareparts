import express from "express";
import cookieParser from 'cookie-parser'
import { PrismaClient } from "@prisma/client";
import cors from "cors";

import { errorHandler } from "@/controller/error";
import authRouter from "./routes/auth";
import productRouter from "./routes/product";
import cartRouter from './routes/cart';
import userRouter from "./routes/user";

const app = express();
export const db = new PrismaClient();


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
// app.options("*", cors());


app.get("/", (req, res, next) => {
  res.send("hello world!");
});

app.use(
  express.json({
    limit: "10kb",
  })
);

app.use(
  express.urlencoded({
    limit: "10kb",
    extended: true,
  })
);

app.use(cookieParser());

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/cart", cartRouter)
app.use("/api/v1/users", userRouter)

app.use(errorHandler);

export default app;
