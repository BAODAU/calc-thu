var wolfram = require('wolfram').createClient("LY3LHG-K4QXJ737HJ")

wolfram.query("who is Barrack Obama?", function(err, result) {
    if (err) throw err
    console.log("%j", result)
})
