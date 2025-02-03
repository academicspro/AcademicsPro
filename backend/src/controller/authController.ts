
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



// ********************************************** register super  admin **********************************************



// *********************************************** register admin **********************************************

// *********************************************** register Teacher **********************************************

// ************************************************ register Student *********************************************
// ************************************************ register Parent **********************************************
// ************************************************ register library **********************************************
// ************************************************ register accountant  **********************************************
// ************************************************ register transport ***********************************************
// ************************************************ register hostel  ***********************************************
