//obtener el cliente
const mysql=require('mysql2');
const Pool= require('pg').Pool;

// Enlace conexión:psql -h b1sapeoibiyybs2athzo-postgresql.services.clever-cloud.com -p 5432 -U uylxrzzv38j9bc2uvpgk -d b1sapeoibiyybs2athzo
const pool = new Pool({
    user: 'uylxrzzv38j9bc2uvpgk',
    password:'lLAMT6fkjHn4oLaftZAE',
    host:'b1sapeoibiyybs2athzo-postgresql.services.clever-cloud.com',
    port:5432,
    database: 'b1sapeoibiyybs2athzo'
});

const connection_postgres = module.exports={pool: pool}
