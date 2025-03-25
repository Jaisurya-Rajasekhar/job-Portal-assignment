const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Application = require('../models/application');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // unique filename
    }
});

const upload = multer({ storage: storage });

// POST route with file upload
router.post('/', upload.single('resume'), async (req, res) => {
    const { firstName, lastName, email, phone, coverLetter } = req.body;


    const application = new Application({
        firstName,
        lastName,
        email,
        phone,
        resume: req.file ? req.file.filename : "",  // Save uploaded file name
        coverLetter,
        appliedAt: new Date()
    });

    await application.save();
    res.send("Your Application is Submitted!!");
});

module.exports = router;
