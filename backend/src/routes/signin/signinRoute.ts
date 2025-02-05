import express from "express";
import { signIn } from "../../controller/signin/signinController";

const router = express.Router();

router.post("/sign-in", signIn);

export default router;
