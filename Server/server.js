const express = require('express'); // Require the Express library
const cors = require('cors'); // Require the CORS library

const app = express(); // Create an Express application
const port = 3000; // Define the port number the server will listen on

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing for incoming requests

// Define a GET route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, this is data from the server!' }); // Send a JSON response
});

app.post('/api/data', (req,res) =>{
    const message = req.body.message;
    console.log('Received message:', message);

    res.json({message:`Received:${message}`});

});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`); // Log a message with the server URL
});
