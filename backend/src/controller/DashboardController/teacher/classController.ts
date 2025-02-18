import { Request, Response } from "express";
import { prisma } from "../../../db/prisma";

// create Class

export const createClass = async (req: Request, res: Response) => {
    try {
      const { name, capacity,  teacherId } = req.body;

      if(!name || !capacity || !teacherId){
        res.status(400).json({ error: "All fields are required" });
        return;
      }

      const teacher = await prisma.teacher.findUnique({ where: { id: teacherId } });
      if (!teacher) {
         res.status(400).json({ error: "Teacher not found" });
         return;
      }

      const newClass = await prisma.class.create({
        data: { name, capacity,  
          teacher: { connect: { id: teacherId } }
         },
      });

      console.log(newClass);
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
      const { name, capacity,  teacherId } = req.body;
      const updatedClass = await prisma.class.update({
        where: { id },
        data: { name, capacity,  teacherId },
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


    // Get Teacher Class
    

    export const getClassesByTeacherId = async (req: Request, res: Response) => {

        try {
          const { teacherId } = req.params;
          const classes = await prisma.class.findMany({
            where: { teacherId },
          });
          res.json(classes);
        } catch (error) {
          res.status(500).json({ error: (error as any).message });
    }

  };