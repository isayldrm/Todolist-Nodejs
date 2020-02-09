var express = require('express');
var app=express();
var todoController = require('./controllers/todoController');

//set up template engine
app.set('view engine','ejs');


//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('you are listening the port 3000');


