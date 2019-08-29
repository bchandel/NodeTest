var express = require('express');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var creatError = require('http-errors');
var bodyParser = require('body-parser');
var indexRoute = require('./routes/index');
var userRoute = require('./routes/user.js');
console.log("userRoute",userRoute);
var port = process.env.PORT || 4000 ;
var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);
app.use('/signup',userRoute);

app.use(function(req,res,next){
    next(creatError(404));
});

app.use(function(err,req,res,next){
    res.locals.message= err.message;
    res.locals.error= req.app.get('env') == 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port,function(err){
    console.log("server running on port",port);
});

module.exports = app;