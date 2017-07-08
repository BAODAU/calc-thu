var fileIO = require('./file.json')
var fs = require('fs')

fs.readFile('./file.json' , function(err,data) {
    if (err) throw err;
    var obj = JSON.parse(data);
    console.log(obj.date)
});
