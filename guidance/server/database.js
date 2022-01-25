const mysql=require('mysql');

const connection= mysql.createConnection({
    host:'localhost',
    user:'tapish',
    password:'password',
    database:'studentregistration'
});

module.exports= connection;