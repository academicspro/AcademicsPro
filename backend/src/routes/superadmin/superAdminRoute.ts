import express from 'express';
import { registerSuperAdmin } from '../../controller/superadmin/registerSuperAdminController';

const router = express.Router();

router.post('/register/superadmin', registerSuperAdmin);


export default router;