const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const path = require('path');
const app = express();

var cert=fs.readFileSync('ssl/server.crt','utf8')
var key=fs.readFileSync('ssl/server.key','utf8')
var credit={key,cert}
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    var name = 'hossein'
   res.render('home', {
      name
   });
})

app.get('/login', (req, res) => {
   res.render('login', {
   });
})

app.get('/user-login', (req, res) => {
   var {username,password} = req.query;
   if (username=='hossein' && password=='12345'){
      res.send('نام کاربری شما با موفقیت ثبت شد')
   }
   else{
      res.send('نام کاربری شما اشتباه است')
   }
})
var httpserver=http.createServer(app)
var httpsserver=https.createServer(credit,app)
httpserver.listen(3000)
httpsserver.listen(443)