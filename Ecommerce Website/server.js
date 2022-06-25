// importing packages
const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');
const { dirname } = require('path');

//intializing express.js
const app = express();

//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/Users/eebadreza/Documents/GitHub/HackBots/public", "index.html"));
})

app.listen(3000, () => {
    console.log('listening on port 3000.......');
})