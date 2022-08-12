const express = require('express');

const app = express();

var port  = 3000;

app.use(express.static("public"));

app.post("/",function(req,res){
    res.sendFile(__dirname+"/booking.html");
});

app.post("/signup",function(req,res){
    res.send("Successfully signed up.")
});

app.post("/login",function(req,res){
    res.send("Login Page");
});

app.listen(port,function(){
    console.log("Server started on port 3000.")
});
