/**
 * Created by icapa on 25/4/16.
 */
"use strict";

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Agente = mongoose.model('Agente');

router.get('/',function(req,res,next){
    var name = req.query.name;

    var criteria = {};

    if (typeof name !== "undefined"){
        criteria.name = name;
    }

    // creo la consula
    var query = Agente.find(criteria);

    // Orden descendente
    query.sort({name: -1});

    // Ejecuta la consulta
    query.exec(function(err,rows){
        if (err){
            next(err);
            return;
        }
        res.json({sucess: true,rows: rows});
    });
});

router.post('/',function(req,res,next){
    var agente = new Agente(req.body);


    var errors = agente.validateSync();
    if (errors){
        console.log('errors en put:',errors);
        next(new Error('hubo errores de validacion'));
        return;
    }



    agente.save(function(err,saved){
        if (err){
            next(err);
            return;
        }
        res.json({sucess: true, saved: saved});
    });
});

module.exports = router;

