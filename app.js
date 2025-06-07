import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import gigRoutes from './routes/gigRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/gigs', gigRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('🎯 Freelance Marketplace API is running');
});

export default app;
