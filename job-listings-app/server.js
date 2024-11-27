import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';

const app = express();

app.use(cors());

// Read jobs data
let jobsData;

async function loadJobsData() {
  try {
    const data = await fs.readFile('jobs.json', 'utf8');
    jobsData = JSON.parse(data);
    console.log('Jobs data loaded successfully');
  } catch (error) {
    console.error('Error loading jobs data:', error);
    jobsData = { jobs: [] };
  }
}

loadJobsData();

// Route to get all jobs
app.get('/api/jobs', (req, res) => {
  res.json(jobsData.jobs);
});

// Route to get a specific job by ID
app.get('/api/jobs/:id', (req, res) => {
  const job = jobsData.jobs.find(job => job.id === req.params.id);
  if (job) {
    res.json(job);
  } else {
    res.status(404).json({ error: 'Job not found' });
  }
});

// Remove the app.listen() call as Vercel will handle this

export default app;