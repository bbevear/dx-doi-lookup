function urlLookup(document, callback) {
    var http = require('http');
    var str = '';
    var options = {
        host: 'doi.org',
        path: '/api/handles/' + document,
    };

    var req = http.request(options, function (res) {
         res.on('data', function (body) {
             str += body;
         });
         res.on('end', function () {

            var JSONObject = JSON.parse(str)

             if (res.statusCode != '200') {
                 return callback('Malformed identifier')
             } else {
                 return callback(JSONObject.values[0].data.value)
             }

         });
    });
    req.end();
}

function dateLookup(document, callback) {
    var http = require('http');
    var str = '';
    var options = {
        host: 'doi.org',
        path: '/api/handles/' + document,
    };

    var req = http.request(options, function (res) {
         res.on('data', function (body) {
             str += body;
         });
         res.on('end', function () {

            var JSONObject = JSON.parse(str)

             if (res.statusCode != '200') {
                 return callback('Malformed identifier')
             } else {
                 timestamp = JSONObject.values[0].timestamp
                 timestamp = timestamp.substring(0, timestamp.indexOf('T'));
              
                 return callback(timestamp)
             }

         });
    });
    req.end();
}

function timeLookup(document, callback) {
    var http = require('http');
    var str = '';
    var options = {
        host: 'doi.org',
        path: '/api/handles/' + document,
    };

    var req = http.request(options, function (res) {
         res.on('data', function (body) {
             str += body;
         });
         res.on('end', function () {

            var JSONObject = JSON.parse(str)

             if (res.statusCode != '200') {
                 return callback('Malformed identifier')
             } else {
                 timestamp = JSONObject.values[0].timestamp
                 timestamp = timestamp.substring(11, timestamp.indexOf('Z'));
                 return callback(timestamp)
             }

         });
    });
    req.end();
}

module.exports.urlLookup = urlLookup
module.exports.dateLookup = dateLookup
module.exports.timeLookup = timeLookup













