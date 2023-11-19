require('dotenv').config();
const fs = require('fs');
const https = require('https');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const characterRoutes = require('./api/routes/characterRoutes');

const app = express();
app.use(cors());

// Middleware for handling json
app.use(express.json())

// Mongoose connection to MongoDB
connectDB();

// Routes
app.use('/api', characterRoutes);

// SSL certificate setup
const options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

const port = process.env.PORT || 4000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

https.createServer(options, app).listen(port, () => {
    console.log(`Server running on https://localhost:${port}`);
});
