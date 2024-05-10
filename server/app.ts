import express from "express";
import { errorHandler } from '@/controller/error';

const app = express();

app.get('/', (req, res, next) => {
  res.send("hello world!");
})

app.use(errorHandler);

export default app;