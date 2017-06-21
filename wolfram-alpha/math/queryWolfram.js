var wolfram = require('wolfram-alpha').createClient("DEMO", opts);
 
var results = yield wolfram.query("integrate 2x")
console.log("Result: %j", results);
