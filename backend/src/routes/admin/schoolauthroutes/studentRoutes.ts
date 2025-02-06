import express from 'express';

import multer from 'multer';
import { deletestudent, getAllstudent, getstudentById, registerstudent, updatestudent } from '../../../controller/admin/schoolauth/registerStudentController';

const router = express.Router();
const upload = multer();

router.post('/student',upload.single("profilePic"), registerstudent);
router.get('/student',getAllstudent);
router.get('/student/:id',getstudentById);
router.put('/student/:id',updatestudent);
router.delete('/student/:id',deletestudent);


export default router;