import express from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import gigRoutes from './routes/gigRoutes.js';
import orderRoutes from './routes/orderRoutes.js'; 

const app = express();

// Middleware
app.use(cors({
  origin: '*', // <-- Temporarily allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/gigs', gigRoutes);
app.use('/api/orders', orderRoutes); 

// Root route
app.get('/', (req, res) => {
  res.send('🎯 Freelance Marketplace API is running');
});

export default app;
