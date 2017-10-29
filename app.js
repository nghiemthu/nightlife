var express         = require("express"), 
    app             = express(),
    cookieParser    = require("cookie-parser"),
    mongoose        = require("mongoose"),
    Event            = require("./models/event"),
    passport        = require("passport"),
    session         = require("passport-session"),
    Strategy        = require("passport-twitter").Strategy,
    bodyParser      = require("body-parser");
    
// Require Route
var index           = require("./routes/index");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('body-parser').urlencoded({ extended: false }));
app.use(require('body-parser').json());

mongoose.connect("mongodb://thu:123456@ds237445.mlab.com:37445/nightlife", { useMongoClient: true });
mongoose.Promise = require('bluebird');

//http://mherman.org/blog/2015/09/26/social-authentication-in-node-dot-js-with-passport/#.WbYoSMgjGUk
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());
  
//Event.remove({}, function(err) {if (err) console.log(err)});
// Option.remove({}, function(err) {if (err) console.log(err)});

app.use("", index);

app.get('/', (req, res) => {
  res.render('index');
});

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.redirect('/');
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server started');
})