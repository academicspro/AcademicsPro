import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {prisma} from "../../db/prisma";
import { uploadFile } from "../../config/upload";
import { validationResult } from "express-validator";
import dotenv from "dotenv";

dotenv.config();

export const registerSuperAdmin = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, password, sex } = req.body;

    // Check if superadmin exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Super Admin already exists." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    let profilePicUrl = "";
    let profilePicId = "";
    if (req.file) {
      const uploadResult = await uploadFile(req.file, "profile_pics");
      profilePicUrl = uploadResult.url;
      profilePicId = uploadResult.publicId;
    }

    // Create Super Admin
    const superAdmin = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        sex,
        password: hashedPassword,
        profilePic: profilePicUrl,
        role: "superadmin",
      },
    });

    // Generate JWT Token
    const token = jwt.sign(
      { id: superAdmin.id, role: superAdmin.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    res.status(201).json({ message: "Super Admin registered successfully", token, superAdmin });
  } catch (error) {
    console.error("Register Super Admin Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
