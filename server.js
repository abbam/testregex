var express = require("express");
var app     = express();
var path    = require("path");
app.use(express.static(path.join(__dirname, "jsfiles")));
app.use(express.static(path.join(__dirname, "asset")));
app.use(express.static(path.join(__dirname, "vendor")));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});
app.get('/home',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

app.listen(3000);

console.log("Running at Port 3000");