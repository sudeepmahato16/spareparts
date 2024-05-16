import { Router } from "express";
import { protect } from "@/controller/auth";
import { getCurrentUser } from "@/controller/user";

const userRouter = Router();

userRouter.get("/current-user", protect, getCurrentUser);

export default userRouter;