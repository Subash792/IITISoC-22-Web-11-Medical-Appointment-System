// requiring necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin-subash:dbdb07@cluster0.mvuvhy8.mongodb.net/test?retryWrites=true&w=majority")
const app = express();

var port  = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


// Creating DataBase Structure for doctor DataBase
const doctor_schema = new mongoose.Schema({
    full_name: String,
    email: String,
    phone: Number,
    education: String,
    Spect: String,
    address: String,
    city: String,
    state: String,
});

const doctor = mongoose.model("doctors",doctor_schema);



// post requests
app.post("/",function(req,res){
    res.sendFile(__dirname+"/booking.html");
    console.log(req.body);
    const q = doctor.find(req.body);
    console.log(q);

});

app.post("/signup",function(req,res){
    const d = new doctor(req.body);
    d.save();
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
