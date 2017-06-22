var wolfram = require('wolfram-alpha').createClient("APIKEY-HERE", opts);

var results = yield wolfram.query("integrate 2x")
console.log("Result: %j", results);
