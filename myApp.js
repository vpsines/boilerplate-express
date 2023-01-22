require('dotenv').config()
let express = require('express');
let app = express();

app.use(function(req,res,next){
    // log ip
    let logMessage = req.method +" "+ req.path + " - " +req.ip;
    console.log(logMessage);
    next();
});

app.get("/",function(req,res){
    let absolutePath = __dirname + '/views/index.html';
    app.use('/public',express.static(__dirname + '/public'));
    res.sendFile(absolutePath);
});

app.get("/json",function(req,res){
    let data = {"message": (process.env.MESSAGE_STYLE == "uppercase")?"HELLO JSON":"Hello json"};
    res.json(data);
});

app.get("/now",function(req,res,next){
    req.time = new Date().toString();
    next();
},function(req,res){
    let data = {"time":req.time};
    res.json(data);
});

app.get("/:word/echo",function(req,res){
    let word = req.params.word;
    let data = {"echo": word};
    res.json(data);
});




































 module.exports = app;
