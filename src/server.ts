import express, { NextFunction, Request, Response } from 'express';
import notesRouter from './routes/notes';
import { logger } from './middleware/logger';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

// middlewares
app.use(logger);

// API routes
app.use('/api/v1/notes', notesRouter);

// Server setup
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});
