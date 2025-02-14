import { Request , Response } from "express";
import {prisma } from "../../db/prisma";



export const getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          profilePic: true,
          address: true,
          city: true,
          state: true,
          country: true,
          pincode: true,
          bloodType: true,
          sex: true,
          teacherId: true,
          role: true,
          school: {
            select: {
              name: true, 
            },
          },
          createdAt: true,
          updatedAt: true,
        },
      });
  
      res.status(200).json({ success: true, data: users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
  
  export const getUserById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          profilePic: true,
          address: true,
          city: true,
          state: true,
          country: true,
          pincode: true,
          bloodType: true,
          sex: true,
          role: true,
          teacherId: true,
          school: {
            select: {
              name: true, 
            },
          },
          createdAt: true,
          updatedAt: true,
        },
      });
  
      if (!user) {
         res.status(404).json({ success: false, message: "User not found" });
         return;
      }
  
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
  