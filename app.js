import express from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import gigRoutes from './routes/gigRoutes.js';
import orderRoutes from './routes/orderRoutes.js'; // Optional if added

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/gigs', gigRoutes);
app.use('/api/orders', orderRoutes); // Enable if implemented

// Root route
app.get('/', (req, res) => {
  res.send('🎯 Freelance Marketplace API is running');
});

export default app;
