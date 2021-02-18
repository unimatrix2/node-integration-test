import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Config DOTENV
dotenv.config();
// Imports

import mongoConnection from './configs/db.config';
import { integrator } from './services/integration.service'; // import for testing

// Instance
const app = express();
// Middlewares Setup
app.use(helmet());
app.use(bodyParser.json());
    
// Routes Setup

// Error Handling Setup

// Start Db Connection
mongoConnection(process.env.MONGODB_URI);
// Server Start
app.listen(process.env.PORT, () => console.log(`Listening on PORT ${process.env.PORT}`));

integrator() // runs once at startup
setInterval(() => integrator(), 86400000); // runs every day