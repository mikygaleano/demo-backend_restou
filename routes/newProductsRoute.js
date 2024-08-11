import express from 'express';
import { postNewProducts } from '../controllers/postNewProducts.js';

const router = express.Router();

router.post('/new', postNewProducts);

export  default router;