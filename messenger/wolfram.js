var wolfram = require('wolfram').createClient('LY3LHG-K4QXJ737HJ')

wolfram.query("integrate 2x", function(err, result) {
    if (err) throw err
    console.log("Result: %j", result)
})
