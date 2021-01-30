const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const cors = require("cors");


app.use(cors());

//LOADING ROUTES
const login = require('./routes/login');
const estudiantes = require('./routes/estudiantes');
const seguimiento = require('./routes/seguimiento');



require('dotenv').config();

app.use(morgan('dev'));
app.use(express.json())

//DEFINED ROUTES
app.use('/', login);
app.use('/', estudiantes);
app.use('/', seguimiento);

//PAGES AND RENDERING IN DOM


app.set('port', process.env.PORT || 8083)
app.listen(app.get('port'), ()=>{
    console.log(`Server running on port ${app.get('port')}!!`)
});