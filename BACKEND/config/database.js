//obtener el cliente
const mysql=require('mysql2');

const connection_mysql = mysql.createConnection({
    host:'bgmglk8byodbhqdot1gd-mysql.services.clever-cloud.com',
    user:'un7dxyaeesekkbwa',
    password:'uEOpznkpeliWhK80FQIt',
    database:'bgmglk8byodbhqdot1gd',
    port:3306
});
module.exports={cnn_mysql:connection_mysql}