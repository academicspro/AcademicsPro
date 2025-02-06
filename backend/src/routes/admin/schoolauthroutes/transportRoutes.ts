import express from 'express';

import multer from 'multer';
import { deletetransport, getAlltransport, gettransportById, registertransport, updatetransport } from '../../../controller/admin/schoolauth/registerTransportController';

const router = express.Router();
const upload = multer();

router.post('/transport',upload.single("profilePic"), registertransport);
router.get('/transport',getAlltransport);
router.get('/transport/:id',gettransportById);
router.put('/transport/:id',updatetransport);
router.delete('/transport/:id',deletetransport);


export default router;