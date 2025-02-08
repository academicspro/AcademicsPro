import { Request,Response } from "express";

import { prisma } from "../../../db/prisma";

// create subject
export const createSubject = async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      const subject = await prisma.subject.create({ data: { name } });
      res.json(subject);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

// get subjects

export const getSubjects = async (req: Request, res: Response) => {
    try {
      const subjects = await prisma.subject.findMany();
      res.json(subjects);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

// get subject by ID

export const getSubjectById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const subject = await prisma.subject.findUnique({ where: { id } });
      res.json(subject);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

  // update subject
  export const updateSubject = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const subject = await prisma.subject.update({ where: { id }, data: { name } });
      res.json(subject);
    } catch (error) {
      res.status(500).json({ error: (error as any).message });
    }
  };

  // delete subject

    export const deleteSubject = async (req: Request, res: Response) => {
        try {
        const { id } = req.params;
        await prisma.subject.delete({ where: { id } });
        res.json({ message: "Subject deleted successfully" });
        } catch (error) {
        res.status(500).json({ error: (error as any).message });
        }
    };