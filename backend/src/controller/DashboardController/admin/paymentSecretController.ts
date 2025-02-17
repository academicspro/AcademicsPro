import { Request, Response } from "express";

import { prisma } from "../../../db/prisma";

export const createPaymentSecret = async (req: Request, res: Response) => {
  try {
    const { keyId, keySecret, schoolId } = req.body;

    if (!keyId || !keySecret || !schoolId) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    // const hashedKeySecret = await bcrypt.hash(keySecret, 10);

    const paymentSecret = await prisma.paymentSecret.create({
      data: {
        keyId,
        keySecret,
        school: {
          connect: {
            id: schoolId,
          },
        },
      },
    });

    res.status(200).json({
      message: "Payment Secret Admin registered successfully",
      paymentSecret,
    });
  } catch (error) {
    console.error("Error registering Payment Secret admin:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Get all payment secrets

export const getAllPaymentSecrets = async (req: Request, res: Response) => {
  try {
    const paymentSecrets = await prisma.paymentSecret.findMany({
      include: {
        school: true,
      },
    });

    res.status(200).json(paymentSecrets);
  } catch (error) {
    console.error("Error fetching payment secrets:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Get payment secret by id

export const getPaymentSecretById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const paymentSecret = await prisma.paymentSecret.findUnique({
      where: { id },
      include: {
        school: true,
      },
    });

    res.status(200).json(paymentSecret);
  } catch (error) {
    console.error("Error fetching payment secret:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Update a payment secret

export const updatePaymentSecret = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { keyId, keySecret, schoolId } = req.body;

    const paymentSecret = await prisma.paymentSecret.update({
      where: { id },
      data: {
        keyId,
        keySecret,
      },
    });
    res
      .status(200)
      .json({ message: "Payment Secret updated successfully", paymentSecret });
  } catch (error) {
    console.error("Error updating payment secret:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Delete a payment secret

export const deletePaymentSecret = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const paymentSecret = await prisma.paymentSecret.delete({
      where: { id },
    });

    res
      .status(200)
      .json({ message: "Payment Secret deleted successfully", paymentSecret });
  } catch (error) {
    console.error("Error deleting payment secret:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// Get a payment secret by school id

export const getPaymentSecretBySchoolId = async (
  req: Request,
  res: Response
) => {
  try {
    console.log("Received schoolId:", req.params.schoolId);
    const { schoolId } = req.params;

    if (!schoolId) {
      res.status(400).json({ message: "schoolId is required" });
      return;
    }

    const paymentSecret = await prisma.paymentSecret.findUnique({
      where: { schoolId },
      include: { school: true },
    });

    if (!paymentSecret) {
      res.status(404).json({ message: "Payment secret not found" });
      return;
    }

    res.status(200).json(paymentSecret);
  } catch (error) {
    console.error("Error fetching payment secret:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
