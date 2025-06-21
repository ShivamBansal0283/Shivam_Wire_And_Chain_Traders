import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import inquiryRoutes from './routes/inquiry.js';
import authRoutes from './routes/auth.js';

dotenv.config();

import rateLimit from 'express-rate-limit';

const inquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 inquiries per windowMs
  message: 'Too many inquiries from this IP, please try again later.'
});

const app = express();

// ✅ Step: CORS Configuration
const allowedOrigins = [
  'http://localhost:8080',      // main site (dev)
  "http://localhost:55245",
  'http://localhost:5173',      // dashboard (dev)
  'https://shivamwire.com',     // main site (prod)
  'https://admin.shivamwire.com', // dashboard (prod)
  "http://localhost:55650",
  "http://localhost:59957"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed for this origin'));
    }
  },
  credentials: true
}));



app.use(express.json());

app.get('/', (_, res) => res.send('Leads API running'));

app.use('/api/auth', authRoutes);
app.use('/api/inquiry', (req, res, next) => {
  if (req.method === 'POST') return inquiryLimiter(req, res, next);
  next();
}, inquiryRoutes);

app.get('/health', (_, res) => res.status(200).send('OK'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));