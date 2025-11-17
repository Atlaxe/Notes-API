import express, { NextFunction, Request, Response } from 'express';
import notesRouter from './routes/notes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// API routes
app.use('/api/v1/notes', notesRouter);

// Server setup
// const PORT = process.env.PORT;

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});
