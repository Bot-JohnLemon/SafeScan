const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    email: process.env.DB_EMAIL,
    rol: process.env.DB_ROL,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((error) =>{
    if (error){
        console.log('>>> Database connexion error: '+ error +' :(');
        return;
    }
    console.log('>>> Database connexion succeed :)');
})
module.exports = connection;