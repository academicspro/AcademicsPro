import express from 'express';

import multer from 'multer';
import { deletehostel, getAllhostel, gethostelById, registerhostel, updatehostel } from '../../../controller/admin/schoolauth/registerHostelController';

const router = express.Router();
const upload = multer();

router.post('/hostel',upload.single("profilePic"), registerhostel);
router.get('/hostel',getAllhostel);
router.get('/hostel/:id',gethostelById);
router.put('/hostel/:id',updatehostel);
router.delete('/hostel/:id',deletehostel);


export default router;