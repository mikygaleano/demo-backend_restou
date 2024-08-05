import express from 'express';
import cors from 'cors';

import productsRoute from './routes/productsRoute.js'

const app = express();

app.use(cors());

app.use('/', productsRoute)

export {
    app
};