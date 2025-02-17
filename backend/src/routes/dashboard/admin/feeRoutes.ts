import express from 'express';
import { createFee, deleteFee, getAllFees, getFeeById, getOverdueFees, updateFee } from '../../../controller/DashboardController/admin/feeController';

const router = express.Router();


// Route to create a fee
router.post('/fees', createFee);

// Route to get all fees
router.get('/fees', getAllFees);

// Route to get fee by id
router.get('/fees/:id', getFeeById);

// Route to update a fee
router.put('/fees/:id', updateFee);

// Route to delete a fee
router.delete('/fees/:id', deleteFee);

// Route to get overdue fees
router.get('/fees/overdue', getOverdueFees);


export default router;
