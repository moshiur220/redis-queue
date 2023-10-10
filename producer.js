const { Queue } = require("bullmq");

// Create a Queue for email tasks
const emailQueue = new Queue("emailQueue");

async function sendEmails() {
  for (let i = 1; i <= 5; i++) {
    const emailData = {
      to: `recipient${i}@example.com`,
      subject: `Email ${i}`,
      message: `This is email ${i}`,
    };

    // Add an email task to the queue
    await emailQueue.add("sendEmail", emailData);
    console.log(`Email ${i} added to the queue.`);
  }
}

sendEmails();
