import { prisma } from "../../../db/prisma";
import { Request, Response } from "express";

// Create Grade

export const createGrade = async (req: Request, res: Response) => {
    try {
      const { level , studentId} = req.body;

      if (!level) {
         res.status(400).json({ error: "Level is required" });
         return;
      }
      const grade = await prisma.grade.create({ data: { 
        level ,
        students :{
            connect: { id: studentId }
          }

      } });
      res.json(grade);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

// Get Grades

export const getGrades = async (req: Request, res: Response) => {
    try {
      const grades = await prisma.grade.findMany();
      res.json(grades);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

// Get Grade by ID

export const getGradeById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const grade = await prisma.grade.findUnique({ where: { id } });
      res.json(grade);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

// Update Grade


export const updateGrade = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { level } = req.body;
      const grade = await prisma.grade.update({ where: { id }, data: { level } });
      res.json(grade);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

// Delete Grade

export const deleteGrade = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await prisma.grade.delete({ where: { id } });
      res.json({ message: "Grade deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };