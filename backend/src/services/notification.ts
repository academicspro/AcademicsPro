import { PrismaClient } from '@prisma/client';
import twilio from 'twilio';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

// Environment variables
const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
} = process.env as {
  TWILIO_ACCOUNT_SID: string;
  TWILIO_AUTH_TOKEN: string;
  TWILIO_PHONE_NUMBER: string;
  EMAIL_HOST: string;
  EMAIL_PORT: string;
  EMAIL_USER: string;
  EMAIL_PASS: string;
};

// Twilio client setup
const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: parseInt(EMAIL_PORT),
  secure: parseInt(EMAIL_PORT) === 465, // true for 465, false for other ports
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Function to send SMS
async function sendSMS(phone: string, message: string): Promise<void> {
  try {
    const messageResult = await twilioClient.messages.create({
      body: message,
      from: TWILIO_PHONE_NUMBER,
      to: phone,
    });
    console.log('SMS sent:', messageResult.sid);
  } catch (error) {
    console.error('Failed to send SMS:', error);
  }
}

// Function to send email
async function sendEmail(email: string, subject: string, text: string): Promise<void> {
  try {
    await transporter.sendMail({
      from: `"Reminder Service" <${EMAIL_USER}>`,
      to: email,
      subject: subject,
      text: text,
    });
    console.log('Email sent to:', email);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}

// Main notification function
async function sendNotifications(): Promise<void> {
  try {
    const now = new Date();
    const fees = await prisma.fee.findMany({
      where: {
        dueDate: {
          lte: now,
        },
      },
      include: {
        student: true, 
      },
    });

    for (const fee of fees) {
      if (fee.status === 'PENDING') {
        // First reminder if due in 2 days
        const twoDaysBeforeDue = new Date(fee.dueDate);
        twoDaysBeforeDue.setDate(twoDaysBeforeDue.getDate() - 2);
        if (now >= twoDaysBeforeDue && now < fee.dueDate) {
          await sendSMS(fee.student.phone, `Reminder: Payment due on ${fee.dueDate.toDateString()}`);
          await sendEmail(fee.student.email, 'Payment Reminder', `Your payment is due on ${fee.dueDate.toDateString()}.`);
        }
      } else if (fee.status === 'OVERDUE') {
        // Send reminders 3 times a day for overdue fees
        const hours = now.getHours();
        if (hours % 8 === 0) { // Every 8 hours
          const message = `Overdue: Payment was due on ${fee.dueDate.toDateString()}. Please settle immediately.`;
          await sendSMS(fee.student.phone, message);
          await sendEmail(fee.student.email, 'Overdue Payment', message);
        }
      }
    }
  } catch (error) {
    console.error('Error sending notifications:', error);
  }
}

export { sendNotifications };