import express from 'express';

import multer from 'multer';
import { deleteparent, getAllparent, getparentById, registerparent, updateparent } from '../../../controller/admin/schoolauth/registerParentsController';

const router = express.Router();
const upload = multer();

router.post('/parent',upload.single("profilePic"), registerparent);
router.get('/parent',getAllparent);
router.get('/parent/:id',getparentById);
router.put('/parent/:id',updateparent);
router.delete('/parent/:id',deleteparent);


export default router;