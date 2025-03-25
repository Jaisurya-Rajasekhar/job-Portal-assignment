const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    resume: String, // URL or file path
    coverLetter: String,
    // jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    appliedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);
