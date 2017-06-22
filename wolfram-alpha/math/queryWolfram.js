var wolfram = require('wolfram-alpha').createClient("LY3LHG-K4QXJ737HJ");
 
var results = wolfram.query("integrate 2x")
console.log("Result: %j",results);
