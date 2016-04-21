/**
 * Created by icapa on 21/4/16.
 */
"use strict";
var auth = function(clave){
    return function (req,res,next) {
        if (req.query.clave !== clave) {
            res.status(401).send('No estas autorizado');
            return;
        }
        next();
    }
};

module.exports = auth;
