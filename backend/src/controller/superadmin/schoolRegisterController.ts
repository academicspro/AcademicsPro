import { prisma } from "../../db/prisma";
import { Request, Response } from "express";
import { randomBytes } from "crypto";
import bcrypt from "bcryptjs";
import { uploadFile } from "../../config/upload";
import { sendRegistrationEmail } from "../../config/email";

// Register a school

export const registerSchool = async (req: Request, res: Response) => {
  try {
    const { name,email, phone, address, city, state, country, pincode } = req.body;
    const profilePicFile = req.file;

    if (
      !name ||
      !phone ||
      !email ||
      !address ||
      !city ||
      !state ||
      !country ||
      !pincode 


    ) {
      res.status(400).json({ message: "All fields are required" });
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


    const school = await prisma.school.create({
      data: {
        name,
        email,
        phone,
        address,
        city,
        state,
        country,
        pincode,
        password: hashedPassword,
        profilePic: url,
        role:"admin"
      },
    });
        // Send registration email
        await sendRegistrationEmail(email, tempPassword);

    res.status(200).json({ message: "School Admin registered successfully", school });
  } catch (error) {
    console.error("Error registering school admin:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Upadete a school

export const updateSchool = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, phone, address, city, state, country, pincode } = req.body;

    const school = await prisma.school.update({
      where: { id },
      data: { name, phone, address, city, state, country, pincode },
    });

    console.log(school);
    res.status(200).json({ message: "School updated successfully", school });
  } catch (error) {
    console.error("Error updating school:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// // Delete a school

export const deleteSchool = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const school = await prisma.school.delete({
      where: { id },
    });

    console.log(school);
    res.status(200).json({ message: "School deleted successfully", school });
  } catch (error) {
    console.error("Error deleting school:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Get all schools

export const getAllSchools = async (req: Request, res: Response) => {
  try {
    const schools = await prisma.school.findMany();

    console.log(schools);
    res.status(200).json({ message: "All schools", schools });
  } catch (error) {
    console.error("Error fetching schools:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// // Get a school by id

export const getSchoolById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const school = await prisma.school.findUnique({
      where: { id },
    });

    console.log(school);
    res.status(200).json({ message: "School", school });
  } catch (error) {
    console.error("Error fetching school:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
