import express from 'express';
import { createClass, deleteClass, getClassById, getClasses, updateClass } from '../../../controller/DashboardController/teacher/classController';


const router = express.Router();


router.post('/teacher/class', createClass);
router.get('/teacher/class', getClasses);
router.get('/teacher/class/:id',getClassById);
router.put('/teacher/class/:id',updateClass);
router.delete('/teacher/class/:id',deleteClass);


export default router;