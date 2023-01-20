let express = require('express');
let app = express();
console.log("Hello World");
app.get("/",function(req,res){
    let absolutePath = __dirname + '/views/index.html';
    app.use('/public',express.static(__dirname + '/public'));
    res.sendFile(absolutePath);
});




































 module.exports = app;
