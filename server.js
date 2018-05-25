const express = require('express');
const bodyParser = require("body-parser");
const app = express();

let path = require('path');

const db = require('./database');

app.use(express.static('static'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


// index landing page
app.get('/', function(req, res) {
    res.send('hello')
});

app.get('/events/:month/', function(req, res) {
    let month= req.params.month;
    db.findEventsByMonth(month)
    .then(event => res.send(event))
});

app.post('/addevent', function(req, res) {
    let {month, day, start, end, description } = req.body;
    db.insertEvents(month, day, start, end, description)
    .then(res.send('added'))
})

app.listen(5000);