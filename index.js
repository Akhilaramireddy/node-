require('dotenv').config();

const express=require("express")
const app=express();
const connectdb=require('./db/db');
const  SignupRoutes = require('./routes/SignupRoutes');
app.use(express.json());
connectdb();
app.use('/api',SignupRoutes)
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log('server is running on port 3001')
})