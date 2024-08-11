import express from 'express';
import { getProductsByName } from '../controllers/getProductsByName.js';

const router = express.Router();

router.get('/search/byname', getProductsByName);

export  default router;