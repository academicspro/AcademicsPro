import express from 'express';
import { createAssignment, deleteAssignment, getAssignmentById, getAssignments, updateAssignment } from '../../../controller/DashboardController/teacher/assignmentController';


const router = express.Router();


router.post('/teacher/assignment', createAssignment);
router.get('/teacher/assignment',getAssignments);
router.get('/teacher/assignment/:id',getAssignmentById);
router.put('/teacher/assignment/:id',updateAssignment);
router.delete('/teacher/assignment/:id',deleteAssignment);


export default router;