var express = require('express');
var app = express();

var quotes = [
    { author: 'Edgar Allen Poe', text: 'Believe only half of what you see, and nothing that you hear.' },
    { author: 'Stephen King', text: "Alone. Yes, that's the key word, the most awful word in the English tongue. Murder doesn't hold a candle to it and hell is only a poor synonym." },
    { author: 'H. P. Lovecraft', text: "From even the greatest of horrors irony is seldom absent." }
];

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://s.codepen.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    next();
});

app.get('/', function(req, res) {
    res.send('You have found the horror quote generator.');
});

app.get('/quotes/random', function(req, res) {
    var id = Math.floor(Math.random() * quotes.length);
    var q = quotes[id];
    res.json(q);
});

app.listen(process.env.PORT || 4730);
