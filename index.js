const express = require("express");

const app = express();

const mongoDB=require("./db.js");

require('dotenv').config();

const port=process.env.port || 5000;

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
     "Access-Control-Allow-Headers",
     "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})

mongoDB();

app.use(express.json());

app.use('/api',require("./Routes/CreateUser"));

app.listen(port,()=>{console.log(`Server running at port ${port}`)});