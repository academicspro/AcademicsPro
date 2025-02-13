import express from 'express';
import { createResult,  deleteResult,  getResultById, getResults, updateResult } from '../../../controller/DashboardController/teacher/resultContoller';


const router = express.Router();


router.post('/teacher/result', createResult );
router.get('/teacher/result', getResults);
router.get('/teacher/result/:id',getResultById);
router.put('/teacher/result/:id', updateResult);
router.delete('/teacher/result/:id',deleteResult);


export default router;