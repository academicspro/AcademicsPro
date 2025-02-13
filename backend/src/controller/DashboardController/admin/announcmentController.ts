import { Request,Response } from "express";
import {prisma } from "../../../db/prisma";


export const createAnnouncement = async (req: Request, res: Response) => {
    try {
      const { title, description, date, classId } = req.body;
  
      
      if (!title || !description || !date) {
         res.status(400).json({ error: "Missing required fields: title, description" });
         return;
      }
  
      const announcement = await prisma.announcement.create({
        data: {
          title,
          date: new Date(date),
          description,
          classId,
        },
      });
  
      res.status(201).json(announcement);
    } catch (error) {
      res.status(400).json({ error: (error as any).message });
    }
  };

// get all announcements

    export const getAnnouncements = async (req: Request, res: Response) => {
        try {
        const announcements = await prisma.announcement.findMany();
        res.status(200).json(announcements);
        } catch (error) {
        res.status(400).json({ error: (error as any).message });
        }
    };
    
    // get announcement by id
    
    export const getAnnouncementById = async (req: Request, res: Response) => {
        try {
        const { id } = req.params;
        const announcement = await prisma.announcement.findUnique({
            where: {id},
        });
        if (!announcement) {
            res.status(404).json({ error: "Announcement not found." });
            return;
        }
        res.status(200).json(announcement);
        } catch (error) {
        res.status(400).json({ error: (error as any).message });
        }
    };


    // update announcement

    export const updateAnnouncement = async (req: Request, res: Response) => {
        try {
        const { id } = req.params;
        const { title, description, date, classId } = req.body;
        if (title === undefined || description === undefined || date === undefined) {
            res.status(400).json({ error: "Missing required fields." });
            return;
        }
        const announcement = await prisma.announcement.update({
            where: {id},
            data: {
            title,
            date: new Date(date),
            description,
            classId,
            },
        });
        res.status(200).json(announcement);
        } catch (error) {
        res.status(400).json({ error: (error as any).message });
        }
    };

    // delete announcement

    export const deleteAnnouncement = async (req: Request, res: Response) => {
        try {
        const { id } = req.params;
        await prisma.announcement.delete({
            where: {id},
        });
        res.status(200).json({ message: "Announcement deleted successfully." });
        } catch (error) {
        res.status(400).json({ error: (error as any).message });
        }
    };