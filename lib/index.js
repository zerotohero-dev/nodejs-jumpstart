'use strict';

const average = require('./math').average;

const items = [ 12, 44, 22, 13, 56, 5, 2, -12 ];

console.log( `Items: "${items}".`);
console.log( `Average: "${average(items)}".`);

