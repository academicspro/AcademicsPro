import { Request,Response } from "express";
import { prisma } from "../../../db/prisma";

// create assignment

export const createAssignment = async (req: Request, res: Response) => {
    try {
      const { title, startDate, dueDate, lessonId } = req.body;
      const assignment = await prisma.assignment.create({
        data: { title, startDate, dueDate, lessonId },
      });
      res.json(assignment);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

  // get assignments

export const getAssignments = async (req: Request, res: Response) => {
    try {
      const assignments = await prisma.assignment.findMany();
      res.json(assignments);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

// get assignment by ID

export const getAssignmentById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const assignment = await prisma.assignment.findUnique({ where: { id } });
      res.json(assignment);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

  // update assignment
  export const updateAssignment = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title, startDate, dueDate, lessonId } = req.body;
      const assignment = await prisma.assignment.update({
        where: { id },
        data: { title, startDate, dueDate, lessonId },
      });
      res.json(assignment);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

  // delete assignment

    export const deleteAssignment = async (req: Request, res: Response) => {
        try {
        const { id } = req.params;
        await prisma.assignment.delete({ where: { id } });
        res.json({ message: "Assignment deleted successfully" });
        } catch (error) {
        res.status(500).json({ error: (error as any).message });
        }
      };