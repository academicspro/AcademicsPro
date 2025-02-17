import express from 'express';
import { createPaymentSecret, deletePaymentSecret, getAllPaymentSecrets, getPaymentSecretById, getPaymentSecretBySchoolId, updatePaymentSecret } from '../../../controller/DashboardController/admin/paymentSecretController';

const router = express.Router();

router.post('/admin/payment-secret', createPaymentSecret );
router.get('/admin/payment-secret/:id', getPaymentSecretById );
router.get('/admin/payment-secrets', getAllPaymentSecrets );
router.put('/admin/payment-secret/:id',updatePaymentSecret);
router.delete('/admin/payment-secret/:id',deletePaymentSecret);



// Get Secret of a school

router.get('/admin/payment-secret/school/:schoolId', getPaymentSecretBySchoolId);


export default router;

