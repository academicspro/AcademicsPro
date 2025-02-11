import { Response,Request } from "express";
import { prisma } from "../../../db/prisma";

// create lesson
export const createLesson = async (req: Request, res: Response) => {
  try {
    let { name, day, startTime, endTime, subjectId, classId, teacherId } = req.body;

    if (!name || !day || !startTime || !endTime || !subjectId || !classId || !teacherId) {
      res.status(400).json({ error: "All fields are required" });
      return;
    }
    // Convert startTime and endTime to Date objects
    const start = new Date(startTime);
    const end = new Date(endTime);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
       res.status(400).json({ error: "Invalid date format. Use ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ)" });
       return;
    }

    const lesson = await prisma.lesson.create({
      data: { 
        name, 
        day, 
        startTime: start, 
        endTime: end, 
        subject: { connect: { id: subjectId } },
        class: { connect: { id: classId } },
        teacher: { connect: { id: teacherId } }
      },
    });

    res.status(201).json(lesson);
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