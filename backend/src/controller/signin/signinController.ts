import { Request, Response } from "express";
import { prisma } from "../../db/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Sign-In Controller
export const signIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required." });
      return;
    }

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(404).json({ error: "User not found." });
      return;
    }

    // Compare the password with the stored hashed password
    if (!user.password) {
      res.status(500).json({ error: "User password is missing." });
      return;
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({ error: "Invalid credentials." });
      return;
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "ramji",
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
    });

    res.status(200).json({ message: "Sign-In successful", token });
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
