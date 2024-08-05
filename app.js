import express from 'express';
import cors from 'cors';

import productsRoute from './routes/productsRoute.js'
import { errorMiddleware } from './middleware/errorMiddleware.js';

const app = express();

app.use(cors());

app.use(errorMiddleware)

app.use('/', productsRoute)

export {
    app
};