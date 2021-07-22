const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/bsvhunter.html');
});
app.get('/index.html', function (req, res) {
  res.sendfile(__dirname + '/bsvhunter.html');
});
app.get('/:url', function (req, res) {  
  res.sendfile(__dirname + req.url);
});
app.get('/:url[.js]', function (req, res) {
  res.sendfile(__dirname + req.url);
});
app.get('/:url[.css]', function (req, res) {    
  res.sendfile(__dirname + req.url);
});
app.get('/assets/:url[.png]', function (req, res) {
  res.sendfile(__dirname + req.url);
});

http.listen(process.env.PORT || 3000, function(){
    console.log("Listening on port 3000");
})

