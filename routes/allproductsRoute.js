import express from 'express';
import { getProducts } from '../controllers/getProducts.js';

const router = express.Router();

router.get('/allproducts', getProducts);

export  default router;