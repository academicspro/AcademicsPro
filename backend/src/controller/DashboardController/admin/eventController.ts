import { Request, Response } from "express";
import { prisma} from "../../../db/prisma";


// create Event 


export const createEvent = async (req: Request, res: Response) => {
    try {
      const { title, description, startTime, endTime, classId } = req.body;
  
      
      if (!title || !description || !startTime || !endTime) {
         res.status(400).json({ error: "Missing required fields: title, description, startTime, endTime" });
         return;
        }

      if (new Date(startTime) >= new Date(endTime)) {
         res.status(400).json({ error: "startTime must be before endTime." });
         return;
      }
  
      const event = await prisma.event.create({
        data: {
          title,
          description,
          startTime: new Date(startTime),
          endTime: new Date(endTime),
          classId,
        },
      });
  
      res.status(201).json(event);
    } catch (error) {
      res.status(400).json({ error: (error as any).message });
    }
  };
  

// get all events

    export const getEvents = async (req: Request, res: Response) => {
        try {
        const events = await prisma.event.findMany();
        res.status(200).json(events);
        } catch (error) {
        res.status(400).json({ error: (error as any).message });
        }
    };
    
    // get event by id
    
    export const getEventById = async (req: Request, res: Response) => {
        try {
        const { id } = req.params;
        const event = await prisma.event.findUnique({
            where: {id},
        });
        if (!event) {
            res.status(404).json({ error: "Event not found." });
            return;
        }
        res.status(200).json(event);
        } catch (error) {
        res.status(400).json({ error: (error as any).message });
        }
    };
    
    
    // update event
    
    export const updateEvent = async (req: Request, res: Response) => {
        try {
        const { id } = req.params;
        const { title, description, startTime, endTime, classId } = req.body;
        if (!title || !description || !startTime || !endTime) {
            res.status(400).json({ error: "Missing required fields." });
            return;
        }
        if (new Date(startTime) >= new Date(endTime)) {
             res.status(400).json({ error: "startTime must be before endTime." });
             return;
        }
        const event = await prisma.event.update({
            where: {id},
            data: {
            title,
            description,
            startTime: new Date(startTime),
            endTime: new Date(endTime),
            classId,
            },
        });
        res.status(200).json(event);
        } catch (error) {
        res.status(400).json({ error: (error as any).message });
        }
    };
    
    // delete event
    
    export const deleteEvent = async (req: Request, res: Response) => {
        try {
        const { id } = req.params;
        await prisma.event.delete({
            where: {id},
        });
        res.status(200).json({ message: "Event deleted successfully." });
        } catch (error) {
        res.status(400).json({ error: (error as any).message });
        }
    };