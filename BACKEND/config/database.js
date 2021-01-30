//obtener el cliente
const mysql=require('mysql2');
const Pool= require('pg').Pool;

// Enlace conexión: psql -h bfrufojpzoque3qeb947-postgresql.services.clever-cloud.com -p 5432 -U uensm9677q2e8w5gw0gp -d bfrufojpzoque3qeb947
const pool = new Pool({
    user: 'uensm9677q2e8w5gw0gp',
    password:'yul2Wxg25GXqcBHHIwy7',
    host:'bfrufojpzoque3qeb947-postgresql.services.clever-cloud.com',
    port:5432,
    database: 'bfrufojpzoque3qeb947'
});


const connection_mysql = mysql.createConnection({
    host:'bgmglk8byodbhqdot1gd-mysql.services.clever-cloud.com',
    user:'un7dxyaeesekkbwa',
    password:'uEOpznkpeliWhK80FQIt',
    database:'bgmglk8byodbhqdot1gd',
    port:3306
});

const connection_postgres = 
module.exports={cnn_mysql:connection_mysql,pool}