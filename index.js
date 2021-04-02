//Dependecies
const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const login = require('./routes/login');
const register = require('./routes/register');
const addEmployee = require('./routes/addEmployee');
const order = require('./routes/order');
const stayclean = require('./routes/stayclean');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
const passport = require('passport');
const Register = require("./models/Register");
const Login = require("./models/Login");
const connectEnsureLogin = require('connect-ensure-login');

//Instantiating express
const app = express();

//db connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection
   .on('open', () =>{
     console.log('Mongoose connection open');
   })
   .on('error', (err) =>{
     console.log('Connection erroe: ${err.message}');
   })

//Cpnfigurations
app.set("view engine", "pug");
app.set("views", "./views");

//Middleware
app.use(express.urlencoded({ extended: true }));

//Middleware static files
app.use(express.static("public"));
app.use('/public/images', express.static(__dirname + '/public/images'));

//middleware for passport and session
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

//passport configs
passport.use(Register.createStrategy());
passport.serializeUser(Register.serializeUser());
passport.deserializeUser(Register.deserializeUser());


//custom middleware
app.use((req, res, next) => {
  console.log("A new request received at " + Date.now());
  next();
});

app.use("/register", register);
app.use('/login', login);
app.use('/addEmployee', addEmployee);
app.use('/order', order);
app.use('/stayclean', stayclean);



//cater for undefined routes
app.get('*', (req, res) => {
    res.send('The route specified doesnt exist')
})

//Server
app.listen(4000, () => {
  console.log("Listening on port 4000");
});