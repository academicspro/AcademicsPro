import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../../db/prisma";
import { uploadFile } from "../../../config/upload";
import { sendRegistrationEmail } from "../../../config/email";
import { randomBytes } from "crypto";

// Register  hostel

export const registerhostel = async (req: Request, res: Response) => {
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
        role: "hostel",
        school: {
          connect: { id: schoolId },
        },
      },
    });

    // Send registration email
    await sendRegistrationEmail(email, password);

    const hostel = await prisma.hostel.create({
      data: {
        user: {
          connect: { id: user.id },
        },
        school: {
          connect: { id: schoolId },
        },
      },
    });

    res.status(200).json({ message: "hostel created successfully", user });
  } catch (error) {
    console.error("Error creating hostel:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Get all Super hostels

export const getAllhostel = async (req: Request, res: Response) => {
  try {
    const hostel = await prisma.user.findMany({
      where: {
        role: "hostel",
      },
    });

    res.status(200).json(hostel);
  } catch (error) {
    console.error("Error getting Super hostels:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Get Super hostel by ID

export const gethostelById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const hostel = await prisma.user.findUnique({
      where: { id },
    });

    if (!hostel) {
      res.status(404).json({ error: " hostel not found." });
      return;
    }

    res.status(200).json(hostel);
  } catch (error) {
    console.error("Error getting  hostel:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Update Super hostel

export const updatehostel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, phone, address, city, state, country, pincode } =
      req.body;

    const hostel = await prisma.user.findUnique({
      where: { id },
    });

    if (!hostel) {
      res.status(404).json({ error: " hostel not found." });
      return;
    }

    const hostels = await prisma.user.update({
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

    res.status(200).json(hostels);
  } catch (error) {
    console.error("Error updating  hostel:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Delete  hostel

export const deletehostel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const hostel = await prisma.user.findUnique({
      where: { id },
    });

    if (!hostel) {
      res.status(404).json({ error: " hostel not found." });
      return;
    }

    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: " hostel deleted successfully" });
  } catch (error) {
    console.error("Error deleting  hostel:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
