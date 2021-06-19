const express = require('express');

//express app
const app =express();

//register view engine
app.set('view engine','ejs');

//express app
app.listen(3000);

app.get('/',(req,res) => {
    res.sendFile('./vehiclepooling.html',{root: __dirname});
})

app.get('/signup2',(req,res) => {
    res.sendFile('./signup2.html',{root: __dirname});
})

app.get('/login',(req,res) => {
    res.sendFile('./login.html',{root: __dirname});
})