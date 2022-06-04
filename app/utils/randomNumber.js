const debug = require('debug')('Utils:randomNumber');

const randomWithMax = (max) => Math.floor(Math.random() * max);

const randomInArray = (array) => array[randomWithMax(array.length)];

module.exports = { randomWithMax, randomInArray };
