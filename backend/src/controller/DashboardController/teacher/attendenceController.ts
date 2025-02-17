import { Response, Request } from "express";
import {prisma } from "../../../db/prisma";

// create attendence

export const createAttendance = async (req: Request, res: Response) => {
    try {
      const { studentId, lessonId, present } = req.body;
  
      if (!studentId || !lessonId || present === undefined) {
         res.status(400).json({ error: "Missing required fields." });
         return;
      }
  
      const attendance = await prisma.attendance.create({
        data: {
          studentId,
          lessonId,
          present, 
          date: new Date(), 
        },
      });
  
      res.json(attendance);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };
  

// get attendances

export const getAttendances = async (req: Request, res: Response) => {
    try {
      const attendances = await prisma.attendance.findMany();
      res.json(attendances);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };


  
// get attendance by ID


export const getAttendanceById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const attendance = await prisma.attendance.findUnique({ where: { id } });
      res.json(attendance);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };


// update attendance


export const updateAttendance = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { studentId, lessonId, present } = req.body;
  
      if (!studentId || !lessonId || present === undefined) {
         res.status(400).json({ error: "Missing required fields." });
         return;
      }
  
      const attendance = await prisma.attendance.update({
        where: { id },
        data: { studentId, lessonId, present },
      });
  
      res.json(attendance);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };


// delete attendance
  export const deleteAttendance = async (req: Request, res: Response) => {  
        try {
        const { id } = req.params;
        await prisma.attendance.delete({ where: { id } });
        res.json({ message: "Attendance deleted successfully." });
        } catch (error) {
        res.status(500).json({ error: (error as any).message });
        }
  }