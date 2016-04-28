/**
 * Created by icapa on 28/4/16.
 */

var request = require('request');

var options = {
    url: 'http://localhost:3000/api/v1/agentes',
    json: true,
    //headers: {'User-Agent': '....'};
};

request(options, function(err,response,body){
    if (err || response.statusCode>=400) {
        console.log('Error', response.statusCode, err);
        return;
    }
    console.log('lista',body);


});