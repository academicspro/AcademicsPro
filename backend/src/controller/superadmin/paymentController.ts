import { Request, Response } from "express";
import { prisma } from "../../db/prisma";
import Razorpay from 'razorpay';

// Create a new payment order
async function createPaymentOrder(req: Request, res: Response) {
  const { feeId, amount } = req.body;

  try {
    // Fetch the fee details
    const fee = await prisma.fee.findUnique({
      where: { id: feeId },
    });

    if (!fee) {
       res.status(404).json({ message: 'Fee not found' });
       return;
    }

    // Fetch the payment secret associated with the fee's user
    const paymentSecret = await prisma.paymentSecret.findUnique({
      where: { schoolId: fee.studentId },
    });

    if (!paymentSecret) {
       res.status(404).json({ message: 'Payment secret not found' });
      return;
    }

    // Initialize Razorpay instance
    const razorpay = new Razorpay({
      key_id: paymentSecret.keyId,
      key_secret: paymentSecret.keySecret,
    });

    // Create Razorpay payment order
    const options = {
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      receipt: `receipt#${Date.now()}`,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);

    // Save the payment details in the database (optional, based on your flow)
    await prisma.payment.create({
      data: {
        feeId: fee.id,
        amount: amount,
        razorpayOrderId: order.id,
        status: 'Pending',
        paymentDate: new Date(),
      },
    });

    res.json(order);
  } catch (error) {
    console.error('Error creating payment order:', error);
    res.status(500).json({ message: 'Error creating payment order' });
  }
}

// Handle Razorpay webhook for payment status updates
async function handleWebhook(req: Request, res: Response) {
    const { event, payload } = req.body;
  
    try {
      if (event === 'payment.failed') {
        const payment = await prisma.payment.findUnique({
          where: { razorpayOrderId: payload.payment.entity.order_id } as any, // Use razorpayOrderId
        });
  
        if (payment) {
          await prisma.payment.update({
            where: { id: payment.id }, // Use id for the update
            data: {
              status: 'FAILED',
            },
          });
        }
      } else if (event === 'payment.succeeded') {
        const payment = await prisma.payment.findUnique({
          where: { razorpayOrderId: payload.payment.entity.order_id } as any, // Use razorpayOrderId
        });
  
        if (payment) {
          await prisma.payment.update({
            where: { id: payment.id }, // Use id for the update
            data: {
              status: 'SUCCESS',
            },
          });
  
          // Send invoice email if needed
          const fee = await prisma.fee.findUnique({
            where: { id: payment.feeId },
          });
  
          if (fee) {
            // Send email logic
            // Example: await sendInvoiceEmail(fee.studentId, payment);
          }
        }
      }
  
      res.json({ message: 'Webhook handled successfully' });
    } catch (error) {
      console.error('Error handling webhook:', error);
      res.status(500).json({ message: 'Error handling webhook' });
    }
  }
export { createPaymentOrder, handleWebhook };