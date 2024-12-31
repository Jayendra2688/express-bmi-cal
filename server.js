const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/',function(req,res){
    res.sendFile(__dirname +"/index.html");
})

app.post("/",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    console.log(num1);
    res.send("result is " + (num1+num2));
})

app.listen(3000,function(){
    console.log("sever is active at 3000");
})