import express from 'express';
import { createAnnouncement, deleteAnnouncement, getAnnouncementById, getAnnouncements, updateAnnouncement } from '../../../controller/DashboardController/admin/announcmentController';

const router = express.Router();

router.post('/admin/announcement', createAnnouncement );
router.get('/admin/announcement', getAnnouncements);
router.get('/admin/announcement/:id',getAnnouncementById);
router.put('/admin/announcement/:id', updateAnnouncement);
router.delete('/admin/announcement/:id',deleteAnnouncement);

export default router;