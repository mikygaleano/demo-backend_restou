import express from 'express';
import { getSearchIdProducts } from '../controllers/getSearchIdProducts.js';

const router = express.Router();

router.get('/products/:id', getSearchIdProducts);

export  default router;