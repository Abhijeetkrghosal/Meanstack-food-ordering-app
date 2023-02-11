
import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from 'cors';
import { sample_foods, sample_tags, sample_users } from "./data";
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';
import { dbConnect } from './configs/database.config';
dbConnect();
import jwt from "jsonwebtoken"
import { User } from './models/user.model';
const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin: ['http://localhost:4200']
}));

app.use('/api/foods',foodRouter);

app.use('/api/users',userRouter);
app.use('/api/orders',orderRouter);

const port = 5000;
app.listen(port,()=>{
    console.log(`my website is running at http://localhost:${port}`)
})