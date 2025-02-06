import express from 'express';
import { deleteSuperAdmin, getAllSuperAdmin, getSuperAdminById, registerSuperAdmin, updateSuperAdmin } from '../../controller/superadmin/registerSuperAdminController';
import multer from 'multer';

const router = express.Router();
const upload = multer();

router.post('/superadmin',upload.single("profilePic"), registerSuperAdmin);
router.get('/superadmin',getAllSuperAdmin);
router.get('/superadmin/:id',getSuperAdminById);
router.put('/superadmin/:id',updateSuperAdmin);
router.delete('/superadmin/:id',deleteSuperAdmin);


export default router;