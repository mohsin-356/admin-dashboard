import express from 'express';//module
const app = express();//configuration
app.use(express.json());//configuration
//-----------------------------------
import dotenv from 'dotenv';//module
dotenv.config();//configuration
//-----------------------------------
import helmet from 'helmet';//module
app.use(helmet());//configuration
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));//configuration
//-----------------------------------
import morgan from 'morgan';//module
app.use(morgan("common"));//configuration

import bodyParser from 'body-parser';//module
app.use(bodyParser.json());//configuration
app.use(bodyParser.urlencoded({extended:false}));//configuration

import cors from 'cors';//module
app.use(cors());//configuration

/*------------ROUTES------------*/
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';

app.use('/client',clientRoutes);
app.use('/general',generalRoutes);
app.use('/management',managementRoutes);
app.use('/sales',salesRoutes);

/*MONGODB-CONNECTION-LOG*/
import connectDB from './db/mongoDB.js';
connectDB();
