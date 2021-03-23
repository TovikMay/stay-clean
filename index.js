//Dependecies
const express = require("express");

//Instantiating express
const app = express();

//Cpnfigurations
app.set("view engine", "pug");
app.set("views", "./views");

//Routes
const home = require('./routes/landingMain');
const login = require('./routes/login')
const register = require('./routes/register');
const addEmployee = require('./routes/addEmployee');
const order = require('./routes/order')


//Middleware
app.use(express.urlencoded({ extended: true }));

//Middleware static files
app.use(express.static("public"));

//custom middleware
app.use((req, res, next) => {
  console.log("A new request received at " + Date.now());
  next();
});

app.use('/home', home);
app.use("/register", register);
app.use('/login', login);
app.use('/addEmployee', addEmployee);
app.use('/order', order);

//cater for undefined routes
app.get('*', (req, res) => {
    res.send('The route specified doesnt exist')
})

//Server
app.listen(4000, () => {
  console.log("Listening on port 4000");
});