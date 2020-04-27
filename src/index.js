var randomitem = require('random-item');
var starwarsnames = require('./starwars-names.json');

module.exports = {
    all: starwarsnames,
    random: randomitem(starwarsnames)
};