import express from 'express';
import { getAllSchoolSubscriptions, getAllSubscriptions, getSchoolSubscriptionById, getSchoolSubscriptionByPlanId, getSchoolSubscriptionBySchoolIdAndPlanId, getSubscriptionById, subscribeToPlan, unsubscribeFromPlan, upgradePlan } from '../../../controller/superadmin/schoolSubscribeController';

const router = express.Router();

// Subscribe to a plan
router.post("/subscribe", subscribeToPlan);

// Get all subscriptions
router.get("/", getAllSubscriptions);

// Get subscription by ID
router.get("/:id", getSubscriptionById);

// Unsubscribe from a plan
router.delete("/:id", unsubscribeFromPlan);

// Upgrade plan
router.put("/upgrade/:id", upgradePlan);

// Get all subscriptions for a specific school
router.get("/school/:schoolId", getAllSchoolSubscriptions);

// Get a specific school subscription by ID
router.get("/school/subscription/:id", getSchoolSubscriptionById);

// Get subscriptions by plan ID
router.get("/school/plan/:planId", getSchoolSubscriptionByPlanId);

// Get subscription by school ID and plan ID
router.get("/school/:schoolId/plan/:planId", getSchoolSubscriptionBySchoolIdAndPlanId);


export default router;