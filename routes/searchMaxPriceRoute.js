import express from 'express';
import { getMaxPriceProducts } from '../controllers/getMaxPriceProducts.js';

const router = express.Router();

router.get('/search/max-price', getMaxPriceProducts);

export  default router;