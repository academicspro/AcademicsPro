import express from 'express';
import { registerSuperAdmin } from '../../controller/superadmin/registerSuperAdminController';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.post('/register/superadmin',upload.single("profilePic"), registerSuperAdmin);


export default router;