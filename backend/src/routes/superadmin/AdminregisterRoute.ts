import express from 'express';
import { deleteAdmin, getAllAdmin, getAdminById, registerAdmin, updateAdmin } from '../../controller/superadmin/registerAdminController';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.post('/admin',upload.single("profilePic"), registerAdmin);
router.get('/admin',getAllAdmin);
router.get('/admin/:id',getAdminById);
router.put('/admin/:id',updateAdmin);
router.delete('/admin/:id',deleteAdmin);


export default router;