const express= require('express');
const app=express();
const connection=require('./database');


app.get('/signup',(req,res)=>{


  
    
});

app.listen(3001,()=>{
console.log("running on port 3001");
connection.connect(function(err){
    if(err)throw err;
    console.log('database connected');
})
});