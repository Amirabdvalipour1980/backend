const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    var name = 'hossein'
   res.render('home', {
      name
   });
})


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="/css/home.css">
    <link rel="stylesheet" href="/css/layout.css">
    <link rel="stylesheet" href="fontawesome-free-6.6.0-web/css/all.css">
</head>
<body>
    <nav>
        <div class="links">
            <a href="#">
                <i class="fa fa-home"></i>
                صفحه اصلی
            </a>
            <a href="#">
                <i class="fa fa-newspaper"></i>
                آخرین اخبار
            </a>
            <a href="#">
                <i class="fa fa-headphones"></i>
                تماس با ما
            </a>
            <a href="#">
                <i class="fa fa-phone"></i>
                درباره ما
            </a>
        </div>
        <div class="searchbar">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="جستجو...">
        </div>
        <div class="login-register">
            <a href="/login">
                ورود / ثبت نام
                <i class="fa fa-user"></i>
            </a>
        </div>
    </nav>
    <h1>به سایت من خوش آمدید</h1>
    <p>
        من 
        <%= name %> 
        هستم و 
        <%= age %>
        سالمه!!!
    </p>
    <a href="/login">ورود به حساب کاربری</a>
</body>
</html>
app.listen(3000);