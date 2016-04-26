/**
 * Created by icapa on 26/4/16.
 */
"use strict";

var jwt = require ('jsonwebtoken');

var config = require('../../../local_config');

var express = require('express');
var router = express.Router();

var Usuario = require('mongoose').model('Usuario');


router.post('/authenticate',function(req,res){
    var user = req.body.user;
    var pass = req.body.pass;


    Usuario.findOne({name: user}).exec(function(err,user){
        if (err){
            return res.status(500).json({sucess: false, error: err});
        }
        if (!user){
            return res.status(401).json({sucess: false,error: 'Auth failed: User not found'});
        }

        if (user.pass !== pass){
            return res.status(401).json({sucess: false,error: 'Auth failed: invalid'});
        }

        var token = jwt.sign({id: user._id},config.jwt.secret, {
            expiresIn: '2 days'
        });

        res.json({sucess: true, token: token});
    });
});

module.exports = router;