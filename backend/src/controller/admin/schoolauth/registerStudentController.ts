import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../../../db/prisma";
import { uploadFile } from "../../../config/upload";
import { sendRegistrationEmail } from "../../../config/email";
import { randomBytes } from "crypto";

// Register  student

export const registerstudent = async (req: Request, res: Response) => {
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
      gradeId,
      parentId,
      classId,

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
      !bloodType ||
      !gradeId ||
      !parentId ||
      !classId 
      
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
        role: "student",
        school: {
          connect: { id: schoolId },
        },
      },
    });

    // Send registration email
    await sendRegistrationEmail(email, password);

    const student = await prisma.student.create({
      data: {
        
        user: {
          connect: { id: user.id },
        },
        school: {
          connect: { id: schoolId },
        },
      
        parent: {
          connect: { id: parentId },
        },
        class: {
          connect: { id: classId },
        },
      },
    });

    res.status(200).json({ message: "student created successfully", user });
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Get all Super students

export const getAllstudent = async (req: Request, res: Response) => {
  try {
    const student = await prisma.user.findMany({
      where: {
        role: "student",
      },
    });

    res.status(200).json(student);
  } catch (error) {
    console.error("Error getting Super students:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Get Super student by ID

export const getstudentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const student = await prisma.user.findUnique({
      where: { id },
    });

    if (!student) {
      res.status(404).json({ error: " student not found." });
      return;
    }

    res.status(200).json(student);
  } catch (error) {
    console.error("Error getting  student:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Update Super student

export const updatestudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, phone, address, city, state, country, pincode } =
      req.body;

    const student = await prisma.user.findUnique({
      where: { id },
    });

    if (!student) {
      res.status(404).json({ error: " student not found." });
      return;
    }

    const students = await prisma.user.update({
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

    res.status(200).json(students);
  } catch (error) {
    console.error("Error updating  student:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

// Delete  student

export const deletestudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const student = await prisma.user.findUnique({
      where: { id },
    });

    if (!student) {
      res.status(404).json({ error: " student not found." });
      return;
    }

    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: " student deleted successfully" });
  } catch (error) {
    console.error("Error deleting  student:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
