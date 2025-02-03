import express from "express";
import { registerSchool } from "../controller/authController";

const router = express.Router();

router.post("/school/register", registerSchool);

export default router;
