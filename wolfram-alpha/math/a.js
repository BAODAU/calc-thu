require('fs').readFile('./dummy', 'utf8', function(err,data) {
    if (err)
	console.log(err)
    var obj = JSON.parse(data);
});


