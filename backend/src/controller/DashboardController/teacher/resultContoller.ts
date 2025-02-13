import { Request,Response } from "express";
import {prisma} from "../../../db/prisma";


export const createResult = async (req: Request, res: Response) => {
    try {
      const { studentId, examId, assignmentId, score } = req.body;
  
 
      if (!studentId || (!examId && !assignmentId) || score === undefined) {
         res.status(400).json({ error: "Missing required fields. Provide either examId or assignmentId." });
         return;
      }
  
  
      if (examId && assignmentId) {
         res.status(400).json({ error: "Cannot provide both examId and assignmentId. Choose one." });
         return;
      }
  
      const result = await prisma.result.create({
        data: {
          studentId,
          examId,
          assignmentId, 
          score,
        },
      });
  
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ error: (error as any).message });
    }
  };

  // get all results

    export const getResults = async (req: Request, res: Response) => {
        try {
        const results = await prisma.result.findMany();
        res.status(200).json(results);
        } catch (error) {
        res.status(400).json({ error: (error as any).message });
        }
    };

    // get result by id

    export const getResultById = async (req: Request, res: Response) => {
        try {
        const { id } = req.params;
        const result = await prisma.result.findUnique({
            where: {id},
        });
        if (!result) {
            res.status(404).json({ error: "Result not found." });
            return;
        }
        res.status(200).json(result);
        } catch (error) {
        res.status(400).json({ error: (error as any).message });
        }
    };


    // update result

    export const updateResult = async (req: Request, res: Response) => {
        try {
        const { id } = req.params;
        const { score } = req.body;
        if (score === undefined) {
            res.status(400).json({ error: "Missing required fields." });
            return;
        }
        const result = await prisma.result.update({
            where: {id},
            data: {
            score,
            },
        });
        res.status(200).json(result);
        } catch (error) {
        res.status(400).json({ error: (error as any).message });
        }
    };

    // delete result

    export const deleteResult = async (req: Request, res: Response) => {
        try {
        const { id } = req.params;
        const result = await prisma.result.delete({
            where: {id },
        });
        res.status(200).json(result);
        } catch (error) {
        res.status(400).json({ error: (error as any).message });
        }
    };
  