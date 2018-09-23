const express = require('express');
const Blockchain = require('../blockchain');

// Run in 3001 
const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new Blockchain();

// Expose endpoint for user to see storage
app.get('/blocks', (req, res) => {
    res.json(bc.chain);   
});

//  Load application on port
app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));