import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../../db/prisma";
import { uploadFile } from "../../../config/upload";
import { sendRegistrationEmail } from "../../../config/email";
import { randomBytes } from "crypto";

// Register  account

export const registeraccount = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      phone,
      address,
      city,
      state,
      country,
      pincode,
      password,
      schoolId,
      sex,
      bloodType,
    } = req.body;
    const profilePicFile = req.file;

    // Validate required fields
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !country ||
      !pincode ||
      !schoolId ||
      !sex ||
      !bloodType
    ) {
      res.status(400).json({ error: "All fields are required." });
      return;
    }

    // Check if file is uploaded
    if (!profilePicFile || !profilePicFile.buffer) {
      res.status(400).json({ error: "Profile picture is required." });
      return;
    }

    // Upload profile picture to Cloudinary
    const { publicId, url } = await uploadFile(
      profilePicFile.buffer,
      "profile_pics"
    );

    const tempPassword = randomBytes(6).toString("hex");
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        address,
        city,
        state,
        country,
        pincode,
        sex,
        bloodType,
        profilePic: url,
        password: hashedPassword,
        role: "account",
        school: {
          connect: { id: schoolId },
        },
      },
    });

    // Send registration email
    await sendRegistrationEmail(email, password);

    const account = await prisma.account.create({
      data: {
        user: {
          connect: { id: user.id },
        },
        school: {
          connect: { id: schoolId },
        },
      },
    });

    res.status(200).json({ message: "account created successfully", user });
  } catch (error) {
    console.error("Error creating account:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Get all Super accounts

export const getAllaccount = async (req: Request, res: Response) => {
  try {
    const account = await prisma.user.findMany({
      where: {
        role: "account",
      },
    });

    res.status(200).json(account);
  } catch (error) {
    console.error("Error getting Super accounts:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Get Super account by ID

export const getaccountById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const account = await prisma.user.findUnique({
      where: { id },
    });

    if (!account) {
      res.status(404).json({ error: " account not found." });
      return;
    }

    res.status(200).json(account);
  } catch (error) {
    console.error("Error getting  account:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Update Super account

export const updateaccount = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, phone, address, city, state, country, pincode } =
      req.body;

    const account = await prisma.user.findUnique({
      where: { id },
    });

    if (!account) {
      res.status(404).json({ error: " account not found." });
      return;
    }

    const accounts = await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        phone,
        address,
        city,
        state,
        country,
        pincode,
      },
    });

    res.status(200).json(accounts);
  } catch (error) {
    console.error("Error updating  account:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Delete  account

export const deleteaccount = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const account = await prisma.user.findUnique({
      where: { id },
    });

    if (!account) {
      res.status(404).json({ error: " account not found." });
      return;
    }

    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: " account deleted successfully" });
  } catch (error) {
    console.error("Error deleting  account:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
