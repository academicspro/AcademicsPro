import cron from 'node-cron';
import { sendNotifications } from '../services/notification';

// Schedule notifications to run every hour
cron.schedule('* * * * *', async () => {
  try {
    await sendNotifications();
    console.log('Notifications sent at:', new Date());
  } catch (error) {
    console.error('Error in cron job:', error);
  }
});

export { sendNotifications };