import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// Config DOTENV
dotenv.config();
// Imports

import mongoConnection from './configs/db.config';
import apiRoutes from './routes/api.routes';
import { handle404, handleError } from './middlewares/errorHandler';

// Instance
const app = express();

// Middlewares Setup
app.use(helmet());
app.use(bodyParser.json());
    
// Routes Setup
app.use('/api', apiRoutes);

// Error Handling Setup
app.use(handleError);
app.use(handle404);

// Start Db Connection
mongoConnection(process.env.MONGODB_URI);

// Server Start
app.listen(process.env.PORT, () => console.log(`Listening on PORT ${process.env.PORT}`));