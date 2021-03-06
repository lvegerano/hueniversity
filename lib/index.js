// Load modules

var Hapi = require('hapi');
var Hoek = require('hoek');
var Version = require('./version');


exports.init = function (port, callback) {

    if (typeof port === 'function') {
        callback = port;
        port = 8000;
    }

    var server = new Hapi.Server();
    server.connection({ port: port });
    server.register(Version, function (err) {

        if (err) {
            return callback(err);
        }

        server.start(function (err) {

            return callback(err, server);
        });
    });
};
