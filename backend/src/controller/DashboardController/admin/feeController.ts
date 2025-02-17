import { Request, Response } from "express";
import { prisma } from "../../../db/prisma";

// Create fee

export const createFee = async (req: Request, res: Response) => {
  const { studentId, amount, dueDate, finePerDay } = req.body;
  try {
    const fee = await prisma.fee.create({
      data: { 
        studentId,
        amount, 
        dueDate, 
        finePerDay,
         status: "PENDING" },
    });
    res.status(201).json(fee);
  } catch (error) {
    res.status(500).json({ error: "Error creating fee" });
  }
};


// Get all fees

export const getAllFees = async (req: Request, res: Response) => {
  try {
    const fees = await prisma.fee.findMany();
    res.status(200).json(fees);
  } catch (error) {
    res.status(500).json({ error: "Error fetching fees" });
  }
};

// Get fee by id


export const getFeeById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const fee = await prisma.fee.findUnique({ where: { id } });
    if (!fee)  res.status(404).json({ error: "Fee not found" });
    res.status(200).json(fee);
  } catch (error) {
    res.status(500).json({ error: "Error fetching fee" });
  }
};

// Update a fee

export const updateFee = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { amount, dueDate, finePerDay, status } = req.body;
  try {
    const fee = await prisma.fee.update({
      where: { id },
      data: { amount, dueDate, finePerDay, status },
    });
    res.status(200).json(fee);
  } catch (error) {
    res.status(500).json({ error: "Error updating fee" });
  }
};


// delete a fee

export const deleteFee = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.fee.delete({ where: { id } });
    res.status(200).json({ message: "Fee deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting fee" });
  }
};

// get overdue fees

export const getOverdueFees = async (req: Request, res: Response) => {
  try {
    const fees = await prisma.fee.findMany({
      where: {
        status: "PENDING",
        dueDate: {
          lt: new Date(),
        },
      },
    });
    res.status(200).json(fees);
  } catch (error) {
    res.status(500).json({ error: "Error fetching overdue fees" });
  }
};