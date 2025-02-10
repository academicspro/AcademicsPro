import express from 'express';
import { createGrade, deleteGrade, getGradeById, getGrades, updateGrade } from '../../../controller/DashboardController/teacher/gradeController';


const router = express.Router();


router.post('/teacher/grade', createGrade);
router.get('/teacher/grade',getGrades);
router.get('/teacher/grade/:id',getGradeById);
router.put('/teacher/grade/:id',updateGrade);
router.delete('/teacher/grade/:id',deleteGrade);


export default router;