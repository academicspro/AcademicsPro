import express from 'express';

import multer from 'multer';
import { deleteteacher, getAllteacher, getteacherById, registerteacher, updateteacher } from '../../../controller/admin/schoolauth/registerTeachercontroller';

const router = express.Router();
const upload = multer();

router.post('/teacher', upload.fields([
    { name: 'profilePic', maxCount: 1 },
    { name: 'Resume', maxCount: 1 },
    { name: 'joiningLetter', maxCount: 1 }
  ]), registerteacher);
router.get('/teacher',getAllteacher);
router.get('/teacher/:id',getteacherById);
router.put('/teacher/:id',updateteacher);
router.delete('/teacher/:id',deleteteacher);


export default router;