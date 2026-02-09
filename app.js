import express from 'express';
//import productRouter from './routes/product.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { connect } from 'mongoose';


const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRouter);

