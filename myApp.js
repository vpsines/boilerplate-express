require('dotenv').config()
let express = require('express');
let app = express();
console.log("Hello World");
app.get("/",function(req,res){
    let absolutePath = __dirname + '/views/index.html';
    app.use('/public',express.static(__dirname + '/public'));
    res.sendFile(absolutePath);
});

app.get("/json",function(req,res){
    let data = {"message": (process.env.MESSAGE_STYLE == "uppercase")?"HELLO JSON":"Hello json"};
    res.json(data);
});




































 module.exports = app;
