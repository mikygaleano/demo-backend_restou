import express from 'express';
import { getMinPriceProducts } from '../controllers/getMinPriceProducts.js';

const router = express.Router();

router.get('/search/min-price', getMinPriceProducts);

export  default router;