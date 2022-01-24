const express= require('express');
const app=express();
const mysql=require('mysql');

const db= mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'studentRegistration',
});



app.get('/',(req,res)=>{

    const sqlInsert='INSERT INTO studentRegistration {studentName,studentPassword,studentEmail'
    db.query();
    res.send("hello world");
});
app.listen(3001,()=>{
console.log("running on port 3001");
});