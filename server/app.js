const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const articles = require('./routes/article');
const user = require('./routes/user');


require('dotenv').config();

// require('custom-env').env(process.env.NODE_ENV, './config');

mongoose.set('useCreateIndex', true);
try {
mongoose.connect( process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true}, () =>{
console.log("connected")});    
}catch (error) { 
console.log("could not connect");    
}

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

app.use('/articles', articles);
app.use('/user', user);

const port= process.env.PORT;
app.listen(port,()=>{
    console.log(port)
});