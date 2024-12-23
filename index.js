var express = require('express');
var path = require('path');
var app = express();

app.get('/hello', function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8000, function(){
    console.log("Server is running on port 8000")
});
