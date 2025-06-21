import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '../middleware/auth.js';
import { z } from 'zod';

const prisma = new PrismaClient();
const router = Router();

const InquirySchema = z.object({
  name: z.string().min(1).max(100),
  company: z.string().min(1).max(100),
  phone: z.string().regex(/^[0-9]{10}$/, "Invalid phone number"),
  wireSize: z.string().min(1),
  quantity: z.string().min(1),
  city: z.string().min(1),
  message: z.string().max(1000).optional()
});

// POST /api/inquiry

router.post('/', async (req, res) => {
  try {
    const data = InquirySchema.parse(req.body);

    const inquiry = await prisma.inquiry.create({
      data: {
        ...data,
        message: data.message ?? ""
      },
    });

    res.status(201).json(inquiry);
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: 'Incorrect Details', details: error.errors });
    }

    console.error('Failed to save inquiry:', error);
    res.status(500).json({ error: 'Failed to save inquiry' });
  }
});


// // GET /api/inquiry

// router.get('/', verifyToken, async (req, res) => {
//   const { status } = req.query;
//   let where = {};

//   if (status === 'attended') where.attended = true;
//   else if (status === 'pending') where.attended = false;

//   try {
//     const inquiries = await prisma.inquiry.findMany({
//       where,
//       orderBy: { createdAt: 'desc' }
//     });
//     res.json(inquiries);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to fetch inquiries' });
//   }
// });

router.get('/', verifyToken, async (req, res) => {
  const { status, sort } = req.query;
  let where = {};
  let orderBy = { createdAt: 'desc' }; // default

  if (status === 'attended') where.attended = true;
  else if (status === 'pending') where.attended = false;

  if (sort === 'attended') {
    orderBy = { attendedAt: 'desc' };
  }

  try {
    const inquiries = await prisma.inquiry.findMany({
      where,
      orderBy
    });
    res.json(inquiries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});


export default router;



//toggle attend or pending inquiry
router.patch('/:id/attend', verifyToken, async (req, res) => {
  const { id } = req.params;
  const { attended } = req.body;

  try {
    const updated = await prisma.inquiry.update({
      where: { id },
      data: {
        attended,
        attendedAt: attended ? new Date() : null
      }
    });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update inquiry status' });
  }
});