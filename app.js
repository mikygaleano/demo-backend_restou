import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './middleware/errorMiddleware.js';


import productsRoute from './routes/productsRoute.js';
import searchIdProductsRoute from './routes/searchIdProductsRoute.js'

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(errorMiddleware);

// rutas
app.use('/', productsRoute);
app.use('/', searchIdProductsRoute);


export {
    app
};