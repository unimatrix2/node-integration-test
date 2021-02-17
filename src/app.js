import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import axios from 'axios';

// Config DOTENV
dotenv.config();
// Imports

import mongoConnection from './configs/db.config';

// Instance
const app = express();
// Middlewares Setup
app.use(helmet());
app.use(bodyParser.json());

/* axios.get(`${process.env.PIPEDRIVE_BASE_URL}/deals?status=won&api_token=${process.env.PIPEDRIVE_API_TOKEN}`)
    .then(data => console.log(data.data.data)) */ // Test Request
    
// Routes Setup

// Error Handling Setup

// Start Db Connection
mongoConnection(process.env.MONGODB_URI);
// Server Start
app.listen(process.env.PORT, () => console.log(`Listening on PORT ${process.env.PORT}`));