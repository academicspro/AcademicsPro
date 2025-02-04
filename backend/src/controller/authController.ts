import { Request, Response } from "express";
import { prisma } from "../db/prisma";

// ********************************************** register school **********************************************

export const registerSchool = async (req: Request, res: Response) => {
  try {
    const { name, phone, address, city, state, country, pincode } = req.body;

    const school = await prisma.school.create({
      data: { name, phone, address, city, state, country, pincode },
    });

    console.log(school);
    res.status(200).json({ message: "School registered successfully", school });
  } catch (error) {
    console.error("Error registering school:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// **********************************************  super  admin **********************************************

// 1. register Super Admin

export const registerSuperAdmin = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      address,
      city,
      state,
      country,
      pincode,
      bloodType,
      sex,
      profilePic,
      role,
    } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !country ||
      !pincode ||
      !bloodType ||
      !profilePic ||
      !sex ||
      !role
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const superAdmin = await prisma.user.create({
      data: {
        name,
        email,
        password,
        phone,
        address,
        city,
        state,
        country,
        pincode,
        bloodType,
        profilePic,
        sex,
        role: "superadmin",
      },
    });

    console.log(superAdmin);
    res
      .status(200)
      .json({ message: "Super Admin registered successfully", superAdmin });
  } catch (error) {
    console.error("Error registering super admin:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// 1. Get Super Admin

export const getSuperAdmin = async (req: Request, res: Response) => {
  try {
    const superAdmin = await prisma.user.findMany({
      where: { role: "superadmin" },
    });

    res
      .status(200)
      .json({ message: "Super Admin fetched successfully", superAdmin });
  } catch (error) {
    console.error("Error fetching super admin:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// 3. get super admin by id

export const getSuperAdminById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const superAdmin = await prisma.user.findUnique({
      where: { id: id },
    });

    res
      .status(200)
      .json({ message: "Super Admin fetched successfully", superAdmin });
  } catch (error) {
    console.error("Error fetching super admin:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// 4. update super admin

// *********************************************** Admin **********************************************

// ***********************************************  Teacher **********************************************

// ************************************************  Student *********************************************
// ************************************************  Parent **********************************************
// ************************************************  Library **********************************************
// ************************************************  Accountant  **********************************************
// ************************************************  Transport ***********************************************
// ************************************************ Hostel  ***********************************************
