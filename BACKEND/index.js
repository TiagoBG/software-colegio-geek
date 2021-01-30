const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');

//LOADING ROUTES
//const login = require('./routes/login');
const routes = require('./routes/routes');


require('dotenv').config();

app.use(morgan('dev'));
app.use(express.json())

//DEFINED ROUTES
app.use('/', routes);

//PAGES AND RENDERING IN DOM


app.set('port', process.env.PORT || 8085)
app.listen(app.get('port'), ()=>{
    console.log(`Server running on port ${app.get('port')}!!`)
});