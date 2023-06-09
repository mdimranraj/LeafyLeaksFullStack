import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from "cors";

//configure env
dotenv.config(); //if env file is in some other location pass a "path" method to the funtion

//database config
connectDB();

//rest object
const app = express()

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);


//rest api
app.get('/', (req,res)=>{
    res.send("<h1>Welcome to LeafyLeaks</h1>")
})

//PORT
const PORT = process.env.PORT || 8070;

//run listen
app.listen(PORT, ()=>{
    console.log(`Server running in ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white);
})