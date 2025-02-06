import express from 'express';

import multer from 'multer';
import { deleteaccount, getAllaccount, getaccountById, registeraccount, updateaccount } from '../../../controller/admin/schoolauth/registerAccountController';

const router = express.Router();
const upload = multer();

router.post('/account',upload.single("profilePic"), registeraccount);
router.get('/account',getAllaccount);
router.get('/account/:id',getaccountById);
router.put('/account/:id',updateaccount);
router.delete('/account/:id',deleteaccount);


export default router;