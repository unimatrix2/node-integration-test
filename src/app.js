import express from 'express';
import * as lib from 'pipedrive';
import * as helmet from 'helmet';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Config DOTENV
dotenv.config();
// Middlewares Imports

// Instance
const app = express();

// Middlewares Setup
app.use(helmet());
app.use(bodyParser.json());

// Routes Setup

// Error Handling Setup

// Start Db Connection

// Server Start
app.listen(process.env.PORT, () => console.log(`Listening on PORT ${process.env.PORT}`));