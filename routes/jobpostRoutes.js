    const express = require('express');
    const router = express.Router();

    const jobPost = require('../models/postjob');
    const app = express();

    // POST route with file upload
    router.post('/',  async (req, res) => {
        const { JobTitle,  CompanyName, Location, Salary, JobDescription,ApplicationDeadLine } = req.body;


        const jobpost = new jobPost({
            JobTitle,
            CompanyName,
            Location,
            Salary,
            JobDescription
        });

        await jobpost.save();
        res.send("Your Job Post has been successfully created");
    });
    router.get('/', (req, res) => {
        jobPost.find()
          .then(jobs => res.json(jobs))
          .catch(err => res.status(500).json({ error: 'Failed to fetch jobs' }));
    });
    

    module.exports = router;
