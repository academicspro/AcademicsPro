import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../../db/prisma";
import { uploadFile } from "../../../config/upload";
import { sendRegistrationEmail } from "../../../config/email";
import { randomBytes } from "crypto";

// Register  parent

export const registerparent = async (req: Request, res: Response) => {
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
        role: "parent",
        school: {
          connect: { id: schoolId },
        },
      },
    });

    // Send registration email
    await sendRegistrationEmail(email, password);

    const parent = await prisma.parent.create({
      data: {
        user: {
          connect: { id: user.id },
        },
        school: {
          connect: { id: schoolId },
        },
      },
    });

    res.status(200).json({ message: "parent created successfully", user });
  } catch (error) {
    console.error("Error creating parent:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Get all Super parents

export const getAllparent = async (req: Request, res: Response) => {
  try {
    const parent = await prisma.user.findMany({
      where: {
        role: "parent",
      },
    });

    res.status(200).json(parent);
  } catch (error) {
    console.error("Error getting Super parents:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Get Super parent by ID

export const getparentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const parent = await prisma.user.findUnique({
      where: { id },
    });

    if (!parent) {
      res.status(404).json({ error: " parent not found." });
      return;
    }

    res.status(200).json(parent);
  } catch (error) {
    console.error("Error getting  parent:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Update Super parent

export const updateparent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, phone, address, city, state, country, pincode } =
      req.body;

    const parent = await prisma.user.findUnique({
      where: { id },
    });

    if (!parent) {
      res.status(404).json({ error: " parent not found." });
      return;
    }

    const parents = await prisma.user.update({
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

    res.status(200).json(parents);
  } catch (error) {
    console.error("Error updating  parent:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Delete  parent

export const deleteparent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const parent = await prisma.user.findUnique({
      where: { id },
    });

    if (!parent) {
      res.status(404).json({ error: " parent not found." });
      return;
    }

    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: " parent deleted successfully" });
  } catch (error) {
    console.error("Error deleting  parent:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
