import express from 'express';
import cors from 'cors';
import { errorMiddleware } from './middleware/errorMiddleware.js';


import allproductsRoute from './routes/allproductsRoute.js';
import searchIdProductsRoute from './routes/searchIdProductsRoute.js'
import newProductsRoute from './routes/newProductsRoute.js'
import searchNameProductsRouter from './routes/searchNameProductsRouter.js'



const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(errorMiddleware);

// rutas
app.use('/products', allproductsRoute);
app.use('/products', newProductsRoute);
app.use('/products', searchIdProductsRoute);
app.use('/products', searchNameProductsRouter)


export {
    app
};