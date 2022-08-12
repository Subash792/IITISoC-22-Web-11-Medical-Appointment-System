const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var port  = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));






// post requests
app.post("/",function(req,res){
    res.sendFile(__dirname+"/booking.html");
    console.log(req.body);
});

app.post("/signup",function(req,res){
    res.send("Successfully signed up.")
    console.log(req.body);
});

app.post("/login",function(req,res){
    res.send("Login Page");
    console.log(req.body);
});

app.listen(port,function(){
    console.log("Server started on port 3000.")
});
