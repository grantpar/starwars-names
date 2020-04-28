var randomitem = require('random-item');
var uniquerandomarray = require('unique-random-array');
var starwarsnames = require('./starwars-names.json');
var getrandomitem = uniquerandomarray(starwarsnames);

module.exports = {
    all: starwarsnames,
    random: random
};

function random(number) {
    if (number == undefined) {
        return getrandomitem();
    } else {
        var randomitem = [];
        for (var i = 0; i < number; i = i + 1) {
            randomitem.push(getrandomitem());
        }
        return randomitem;
    }
}