import express from 'express';
import { createSubject, deleteSubject, getSubjectById, getSubjects, updateSubject } from '../../../controller/DashboardController/teacher/subjectController';


const router = express.Router();


router.post('/teacher/subject', createSubject);
router.get('/teacher/subject',getSubjects);
router.get('/teacher/subject/:id',getSubjectById);
router.put('/teacher/subject/:id',updateSubject);
router.delete('/teacher/subject/:id',deleteSubject);


export default router;