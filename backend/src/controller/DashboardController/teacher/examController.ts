import { Request,Response } from "express";
import { prisma } from "../../../db/prisma";

// create exam

export const createExam = async (req: Request, res: Response) => {
    try {
      const { title, startTime, endTime, lessonId } = req.body;
      const exam = await prisma.exam.create({
        data: { title, startTime, endTime, lessonId },
      });
      res.json(exam);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

// get exams

export const getExams = async (req: Request, res: Response) => {
    try {
      const exams = await prisma.exam.findMany();
      res.json(exams);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

// get exam by ID

export const getExamById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const exam = await prisma.exam.findUnique({ where: { id } });
      res.json(exam);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

  // update exam
  export const updateExam = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title, startTime, endTime, lessonId } = req.body;
      const exam = await prisma.exam.update({
        where: { id },
        data: { title, startTime, endTime, lessonId },
      });
      res.json(exam);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

  // delete exam

    export const deleteExam = async (req: Request, res: Response) => {
        try {
        const { id } = req.params;
        await prisma.exam.delete({ where: { id } });
        res.json({ message: "Exam deleted successfully" });
        } catch (error) {
        res.status(500).json({ error: (error as any).message });    
    }
};
