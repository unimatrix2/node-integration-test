const express = require('express');
const lib = require('pipedrive');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Config DOTENV
dotenv.config();

// Middlewares Imports

// Instance
const app = express();

// Middlewares Setup
app.use(bodyParser.json());

// Routes Setup

// Error Handling Setup

// Start Db Connection

// Server Start
app.listen(process.env.PORT, () => console.log(`Listening on PORT ${process.env.PORT}`));