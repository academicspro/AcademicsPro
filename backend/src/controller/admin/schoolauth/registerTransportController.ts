import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../../db/prisma";
import { uploadFile } from "../../../config/upload";
import { sendRegistrationEmail } from "../../../config/email";
import { randomBytes } from "crypto";

// Register  transport

export const registertransport = async (req: Request, res: Response) => {
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
        role: "transport",
        school: {
          connect: { id: schoolId },
        },
      },
    });

    // Send registration email
    await sendRegistrationEmail(email, password);

    const transport = await prisma.transport.create({
      data: {
        user: {
          connect: { id: user.id },
        },
        school: {
          connect: { id: schoolId },
        },
      },
    });

    res.status(200).json({ message: "transport created successfully", user });
  } catch (error) {
    console.error("Error creating transport:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Get all Super transports

export const getAlltransport = async (req: Request, res: Response) => {
  try {
    const transport = await prisma.user.findMany({
      where: {
        role: "transport",
      },
    });

    res.status(200).json(transport);
  } catch (error) {
    console.error("Error getting Super transports:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Get Super transport by ID

export const gettransportById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const transport = await prisma.user.findUnique({
      where: { id },
    });

    if (!transport) {
      res.status(404).json({ error: " transport not found." });
      return;
    }

    res.status(200).json(transport);
  } catch (error) {
    console.error("Error getting  transport:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Update Super transport

export const updatetransport = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, phone, address, city, state, country, pincode } =
      req.body;

    const transport = await prisma.user.findUnique({
      where: { id },
    });

    if (!transport) {
      res.status(404).json({ error: " transport not found." });
      return;
    }

    const transports = await prisma.user.update({
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

    res.status(200).json(transports);
  } catch (error) {
    console.error("Error updating  transport:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Delete  transport

export const deletetransport = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const transport = await prisma.user.findUnique({
      where: { id },
    });

    if (!transport) {
      res.status(404).json({ error: " transport not found." });
      return;
    }

    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: " transport deleted successfully" });
  } catch (error) {
    console.error("Error deleting  transport:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
