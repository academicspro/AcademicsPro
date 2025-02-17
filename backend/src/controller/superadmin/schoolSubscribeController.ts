import { Request, Response } from "express";
import { prisma } from "../../db/prisma";

// School Subsribe to Plan 

export const subscribeToPlan = async (req: Request, res: Response) => {
    const { schoolId, planId } = req.body;
    try {
      const plan = await prisma.plan.findUnique({ where: { id: planId } });
      if (!plan) {
        res.status(404).json({ error: "Plan not found" });
        return;
      }
        
  
      const subscription = await prisma.subscription.create({
        data: { schoolId, planId, startDate: new Date(), endDate: new Date(Date.now() + plan.durationDays * 86400000) },
      });
  
      res.status(201).json(subscription);
    } catch (error) {
      res.status(500).json({ error: "Error subscribing" });
    }
  };

// Get all subscriptions

export const getAllSubscriptions = async (req: Request, res: Response) => {
    try {
      const subscriptions = await prisma.subscription.findMany();
      res.status(200).json(subscriptions);
    } catch (error) {
      res.status(500).json({ error: "Error fetching subscriptions" });
    }
  };

// Get subscription by id


export const getSubscriptionById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const subscription = await prisma.subscription.findUnique({ where: { id } });
      if (!subscription)  res.status(404).json({ error: "Subscription not found" });
      res.status(200).json(subscription);
    } catch (error) {
      res.status(500).json({ error: "Error fetching subscription" });
    }
  };

// School Unsubscribe from Plan

export const unsubscribeFromPlan = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const subscription = await prisma.subscription.findUnique({ where: { id } });
      if (!subscription)  res.status(404).json({ error: "Subscription not found" });
  
      await prisma.subscription.delete({ where: { id } });
  
      res.status(200).json({ message: "Subscription deleted" });
    } catch (error) {
      res.status(500).json({ error: "Error deleting subscription" });
    }
  };

  // school upgrade plan

    export const upgradePlan = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { planId } = req.body;
        try {
        const plan = await prisma.plan.findUnique({ where: { id: planId } });
        if (!plan) {
            res.status(404).json({ error: "Plan not found" });
            return;
        }
    
        const subscription = await prisma.subscription.update({
            where: { id },
            data: { planId, endDate: new Date(Date.now() + plan.durationDays * 86400000) },
        });
    
        res.status(200).json(subscription);
        } catch (error) {
        res.status(500).json({ error: "Error upgrading plan" });
        }
    };

    // Get all School Subscription 

    export const getAllSchoolSubscriptions = async (req: Request, res: Response) => {
        const { schoolId } = req.params;
        try {
          const subscriptions = await prisma.subscription.findMany({ where: { schoolId } });
          res.status(200).json(subscriptions);
        } catch (error) {
          res.status(500).json({ error: "Error fetching subscriptions" });
        };

    };

    // Get all School Subscription

    export const getSchoolSubscriptionById = async (req: Request, res: Response) => {
        const { id } = req.params;
        try {
          const subscription = await prisma.subscription.findUnique({ where: { id } });
          if (!subscription)  res.status(404).json({ error: "Subscription not found" });
          res.status(200).json(subscription);
        } catch (error) {
          res.status(500).json({ error: "Error fetching subscription" });
        }
      };

      // Get all School Subscription

      export const getSchoolSubscriptionByPlanId = async (req: Request, res: Response) => {
        const { planId } = req.params;
        try {
          const subscriptions = await prisma.subscription.findMany({ where: { planId } });
          res.status(200).json(subscriptions);
        } catch (error) {
          res.status(500).json({ error: "Error fetching subscriptions" });
        }
      };

      // Get all School Subscription

      export const getSchoolSubscriptionBySchoolIdAndPlanId = async (req: Request, res: Response) => {
        const { schoolId, planId } = req.params;
        try {
          const subscription = await prisma.subscription.findFirst({ where: { schoolId, planId } });
          if (!subscription)  res.status(404).json({ error: "Subscription not found" });
          res.status(200).json(subscription);
        } catch (error) {
          res.status(500).json({ error: "Error fetching subscription" });
        }
      };





