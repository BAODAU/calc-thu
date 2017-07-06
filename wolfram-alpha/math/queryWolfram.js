var wolfram = require('wolfram').createClient("LY3LHG-K4QXJ737HJ")

wolfram.query("e^x from 1 to e", function(err, result) {
    if (err) throw err
    console.log("Result: %j", result)
})
