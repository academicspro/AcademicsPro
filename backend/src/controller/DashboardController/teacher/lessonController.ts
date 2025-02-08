import { Response,Request } from "express";
import { prisma } from "../../../db/prisma";

// create lesson
export const createLesson = async (req: Request, res: Response) => {
    try {
      const { name, day, startTime, endTime, subjectId, classId, teacherId } = req.body;
      const lesson = await prisma.lesson.create({
        data: { name, day, startTime, endTime, subjectId, classId, teacherId },
      });
      res.json(lesson);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

// get lessons

export const getLessons = async (req: Request, res: Response) => {
    try {
      const lessons = await prisma.lesson.findMany();
      res.json(lessons);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

// get lesson by ID

export const getLessonById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const lesson = await prisma.lesson.findUnique({ where: { id } });
      res.json(lesson);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

  // update lesson
  export const updateLesson = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, day, startTime, endTime, subjectId, classId, teacherId } = req.body;
      const lesson = await prisma.lesson.update({
        where: { id },
        data: { name, day, startTime, endTime, subjectId, classId, teacherId },
      });
      res.json(lesson);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

  // delete lesson

    export const deleteLesson = async (req: Request, res: Response) => {
        try {
        const { id } = req.params;
        await prisma.lesson.delete({ where: { id } });
        res.json({ message: "Lesson deleted successfully" });
        } catch (error) {
        res.status(500).json({ error: (error as any).message });
        }
    }