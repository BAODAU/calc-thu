var wolfram = require('wolfram');

var client = wolfram.createClient('LY3LHG-K4QXJ737HJ');
var result = yield client.query("integrate 2x");

if (Array.isArray(result))
    console.log("it's an array")
