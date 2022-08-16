var express = require("express");
var app = express(); 


app.set("view engine", "ejs"); 

app.get("/", (req,res)=>{
res.render("index");


});



app.listen("5500",()=>{
    console.log("server is running...");
})