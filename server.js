const mongoose=require("mongoose");
const express=require('express');
const path=require('path');


const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/post', require('./routes/applicationRoutes')); 
app.use('/postjob',require('./routes/jobpostRoutes'));
app.use(express.static(path.join(__dirname, 'public')));

async function main(){
    await mongoose.connect("mongodb://localhost:27017/JobPortal");
    console.log("Connected to MongoDB");
}
main().catch(error=> console.log(error.message));


// Route to serve index.html
app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to serve apply.html
app.get('/apply(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'apply.html'));
});

// Route to serve job-details.html
app.get('/job-details(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'job-details.html'));
});

// Route to serve post-job.html
app.get('/post-job(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'post-job.html'));
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});




