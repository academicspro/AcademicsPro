import express from 'express';
import { createPlan, deletePlan, getAllPlans, getPlanById, updatePlan } from '../../../controller/superadmin/createPlanController';

const router = express.Router();

router.post('/plan/create', createPlan);
router.get('/plans', getAllPlans);
router.get('/plan/:id', getPlanById);
router.put('/plan/:id', updatePlan);
router.delete('/plan/:id', deletePlan);

export default router;
