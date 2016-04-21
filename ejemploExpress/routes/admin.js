/**
 * Created by icapa on 21/4/16.
 */
"use strict";
var express = require('express');
var router = express.Router();

// Esto es un middleware especializado
var auth = require('../lib/auth');


router.get('/',auth('12345'),function(req,res){
   res.send('Estás autenticado !!');
});

router.get('/:identificador([0-9]+)/piso/:piso(A|B|C)',function(req,res){
    console.log('req.params:',req.params);
    console.log('req.query:',req.query);

    res.send('zona de admin ' + req.params.identificador
        + 'piso: ' + req.params.piso);
});

router.post('/',function(req,res){
    console.log('req.body',req.body);
    res.send('body leido');
})

module.exports = router;