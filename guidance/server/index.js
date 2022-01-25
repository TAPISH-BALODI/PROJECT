const express= require('express');
const app=express();
const connection=require('./database');


app.get('/',(req,res)=>{

    const sqlInsert="INSERT INTO studentdata(studentname,studentpassword,studentemail) VALUES('tapish','tapish','tapishbalodi7@gmail.com');"
    connection.query(sqlInsert,(err,result)=>{
        res.send("data inserted");
    });
    
});

app.listen(3001,()=>{
console.log("running on port 3001");
connection.connect(function(err){
    if(err)throw err;
    console.log('database connected');
})
});