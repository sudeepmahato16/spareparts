import { Router } from "express";
import { logout, signIn, signUp } from "@/controller/auth";

const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.post("/signout", logout);

export default authRouter;