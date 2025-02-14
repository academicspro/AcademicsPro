import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../../db/prisma";
import { uploadFile } from "../../../config/upload";
import { sendRegistrationEmail } from "../../../config/email";
import { randomBytes } from "crypto";

// Register  teacher

export const registerteacher = async (req: Request, res: Response) => {
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        role: "teacher",
        school: {
          connect: { id: schoolId },
        },
      },
    });

    // Send registration email
    await sendRegistrationEmail(email, tempPassword);

    const teacher = await prisma.teacher.create({
      data: {
        user: {
          connect: { id: user.id },
        },
        school: {
          connect: { id: schoolId },
        },
      },
    });
     // Update user with teacherId
     await prisma.user.update({
      where: { id: user.id },
      data: {
        teacherId: teacher.id,
      },
    });

    res.status(200).json({ message: "teacher created successfully", teacher });
  } catch (error) {
    console.error("Error creating teacher:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Get all Super teachers

export const getAllteacher = async (req: Request, res: Response) => {
  try {
    const teacher = await prisma.user.findMany({
      where: {
        role: "teacher",
      },
    });



    res.status(200).json(teacher);
  } catch (error) {
    console.error("Error getting Super teachers:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Get Super teacher by ID

export const getteacherById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const teacher = await prisma.user.findUnique({
      where: { id },
    });

    if (!teacher) {
      res.status(404).json({ error: " teacher not found." });
      return;
    }

    res.status(200).json(teacher);
  } catch (error) {
    console.error("Error getting  teacher:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Update Super teacher

export const updateteacher = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, phone, address, city, state, country, pincode } =
      req.body;

    const teacher = await prisma.user.findUnique({
      where: { id },
    });

    if (!teacher) {
      res.status(404).json({ error: " teacher not found." });
      return;
    }

    const teachers = await prisma.user.update({
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

    res.status(200).json(teachers);
  } catch (error) {
    console.error("Error updating  teacher:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Delete  teacher

export const deleteteacher = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const teacher = await prisma.user.findUnique({
      where: { id },
    });

    if (!teacher) {
      res.status(404).json({ error: " teacher not found." });
      return;
    }

    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: " teacher deleted successfully" });
  } catch (error) {
    console.error("Error deleting  teacher:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
