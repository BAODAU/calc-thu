var request = require('request');
request('https://api.wolframalpha.com/v2/query?input=integrate+e+to+the+power+of+x+with+respect+to+x&appid=LY3LHG-K4QXJ737HJ',function(error,response,body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});
