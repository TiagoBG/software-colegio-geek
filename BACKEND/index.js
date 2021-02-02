const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const cors = require("cors");


app.use(cors());


const routes = require('./routes/routes');


require('dotenv').config();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', routes);



app.set('port', process.env.PORT || 8083)
app.listen(app.get('port'), ()=>{
    console.log(`Server running on port ${app.get('port')}!!`)
});