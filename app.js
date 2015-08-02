var express = require('express');
var app = express();

var quotes = [
    { author: 'Edgar Allen Poe', text: 'Believe only half of what you see, and nothing that you hear.' }
];

app.get('/', function(req, res) {
    res.send('You have found the horror quote generator.');
});

app.get('/quotes/random', function(req, res) {
    var id = Math.floor(Math.random() * quotes.length);
    var q = quotes[id];
    res.json(q);
});

app.listen(process.env.PORT || 4730);
