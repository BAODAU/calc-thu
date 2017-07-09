var wolfram = require('wolfram').createClient("LY3LHG-K4QXJ737HJ")

wolfram.query("evaluate the integral of (2x+1)/(x+2)", function(err, result) {
    if (err) throw err
    console.log("%j", result)
})
