import { Router } from "express";
import { signIn, signUp } from "@/controller/auth";

const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);

export default authRouter;