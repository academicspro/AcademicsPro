import express from 'express';
import { createExam, deleteExam, getExamById, getExams, updateExam } from '../../../controller/DashboardController/teacher/examController';


const router = express.Router();


router.post('/teacher/exam', createExam);
router.get('/teacher/exam', getExams);
router.get('/teacher/exam/:id',getExamById);
router.put('/teacher/exam/:id',updateExam);
router.delete('/teacher/exam/:id',deleteExam);


export default router;