import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import { prisma } from "../../db/prisma";
import { uploadFile } from "../../config/upload";
import { sendRegistrationEmail } from "../../config/email";

export const registerSuperAdmin = async (req: Request, res: Response) => {
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
      !pincode
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

    const hashedPassword = await bcrypt.hash(password, 10);

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
        sex: "FEMALE",
        bloodType: "O+",
        profilePic: url,
        password: hashedPassword,
        role: "superadmin",
      },
    });

    // Send registration email
    await sendRegistrationEmail(email, password);

    res.status(200).json({ message: "Student created successfully", user });
  } catch (error) {
    console.error("Error creating Student:", error);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
