import express from 'express';
import { createEvent, deleteEvent, getEventById, getEvents, updateEvent } from '../../../controller/DashboardController/admin/eventController';

const router = express.Router();

router.post('/admin/event', createEvent );
router.get('/admin/event', getEvents);
router.get('/admin/event/:id',getEventById);
router.put('/admin/event/:id', updateEvent);
router.delete('/admin/event/:id',deleteEvent);

export default router;