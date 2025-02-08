import { Request, Response } from "express";
import { prisma } from "../../../db/prisma";

// create Class

export const createClass = async (req: Request, res: Response) => {
    try {
      const { name, capacity, gradeId, teacherId } = req.body;
      const newClass = await prisma.class.create({
        data: { name, capacity, gradeId, teacherId },
      });
      res.json(newClass);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

// get Classes

export const getClasses = async (req: Request, res: Response) => {
    try {
      const classes = await prisma.class.findMany();
      res.json(classes);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

// get Class by ID

export const getClassById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const classById = await prisma.class.findUnique({ where: { id } });
      res.json(classById);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };


// update Class

  export const updateClass = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, capacity, gradeId, teacherId } = req.body;
      const updatedClass = await prisma.class.update({
        where: { id },
        data: { name, capacity, gradeId, teacherId },
      });
      res.json(updatedClass);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

  // delete Class

    export const deleteClass = async (req: Request, res: Response) => {
        try {
        const { id } = req.params;
        await prisma.class.delete({ where: { id } });
        res.json({ message: "Class deleted successfully" });
        } catch (error) {
        res.status(500).json({ error: (error as any).message });
        }
    };