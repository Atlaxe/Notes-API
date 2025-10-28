import express from 'express'
import noteRoutes from './routes/noteRoutes'
import { errorHandler } from './middlewares/errorHandler'

const app = express();

app.use(express.json())

// routes
app.use('/api/notes', noteRoutes)

// Global error handler
app.use(errorHandler)

export default app;