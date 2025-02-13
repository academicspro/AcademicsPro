import express from 'express';
import { createAttendance, deleteAttendance, getAttendanceById, getAttendances, updateAttendance } from '../../../controller/DashboardController/teacher/attendenceController';


const router = express.Router();


router.post('/teacher/attendence', createAttendance);
router.get('/teacher/attendence', getAttendances );
router.get('/teacher/attendence/:id', getAttendanceById);
router.put('/teacher/attendence/:id', updateAttendance);
router.delete('/teacher/attendence/:id', deleteAttendance);


export default router;