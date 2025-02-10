import express from 'express';
import { createLesson, deleteLesson, getLessonById, getLessons, updateLesson } from '../../../controller/DashboardController/teacher/lessonController';


const router = express.Router();


router.post('/teacher/lesson', createLesson);
router.get('/teacher/lesson',getLessons);
router.get('/teacher/lesson/:id',getLessonById);
router.put('/teacher/lesson/:id',updateLesson);
router.delete('/teacher/lesson/:id',deleteLesson);


export default router;