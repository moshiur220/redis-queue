const { Worker, Queue } = require("bullmq");

const redisConnection = {
  host: "localhost",
  port: 6379,
};

const emailQueue = new Queue("emailQueue", {
  limiter: { max: 5, duration: 1000 },
  connection: redisConnection,
});

const worker = new Worker("emailQueue", async (job) => {
  console.log(
    `Sending email to ${job.data.to} with subject: ${job.data.subject}`
  );
  // Simulate sending an email (replace this with your actual email sending logic)
  // ...

  // Mark the job as completed
  return job.data;
});
