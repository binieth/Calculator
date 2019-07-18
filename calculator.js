

const express = require ("express");
const bodyParser = require ("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result =  num1 + num2;
    
    res.send("The sum of the two number is:" + result);
});

app.get("/about", function(req,res){
    res.send("Testing testing!!!")
})



app.listen(3000, ()=>{
    console.log("You are on port 3000");
});