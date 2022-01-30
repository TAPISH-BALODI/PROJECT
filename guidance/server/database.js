const mysql=require('mysql');

 export const  connection= mysql.createConnection({
    host:'localhost',
    user:'sqluser',
    password:'password',
    database:'studentregistration'
});

