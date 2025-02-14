import express from 'express';
import { createClass, deleteClass, getClassById, getClasses, getClassesByTeacherId, updateClass } from '../../../controller/DashboardController/teacher/classController';


const router = express.Router();


router.post('/teacher/class', createClass);
router.get('/teacher/class', getClasses);
router.get('/teacher/class/:id',getClassById);
router.put('/teacher/class/:id',updateClass);
router.delete('/teacher/class/:id',deleteClass);


//  Get Classes of a teacher 
router.get('/teacher/classes/:id', getClassesByTeacherId)


export default router;
