/**
 * Created by icapa on 26/4/16.
 */
"use strict";

var basicaAuth = require('basic-auth');

module.exports = function(username,password){
    return function (req,res,next){
        var user = basicaAuth(req);
        if (!user || user.name !== username || user.pass !== password){
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
            res.send(401);
            return;
        }
        next();
    };
};