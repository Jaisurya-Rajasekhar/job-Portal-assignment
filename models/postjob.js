const mongoose = require('mongoose');

const jobpostSchema = new mongoose.Schema({
    JobTitle: String,
    CompanyName: String,
    Location: String,
    Salary: Number,
    JobDescription: String,
    Deadline:Date
});

module.exports = mongoose.model('postjob', jobpostSchema);
