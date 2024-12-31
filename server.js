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
    // console.log(num1);
    res.send("result is " + (num1+num2));
})
app.get('/bmical',function(req,res){
    res.sendFile(__dirname + '/bmi.html');
})
app.post('/bmical',function(req,res){
    var h = Number(req.body.height);
    var w = Number(req.body.weight);
    res.send("your bmi is "+Math.round((w/h**2)*100)/100);
})
app.listen(3000,function(){
    console.log("sever is active at 3000");
})