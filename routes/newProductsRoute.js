import express from 'express';
import multer from 'multer';
import { postNewProducts } from '../controllers/postNewProducts.js';


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.post('/new', upload.single('image'), postNewProducts);

export  default router;