import express from 'express';
import { getSearchIdProducts } from '../controllers/getSearchIdProducts.js';

const router = express.Router();

router.get('/search/id/:id', getSearchIdProducts);

export  default router;