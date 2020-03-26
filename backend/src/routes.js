const express = require('express');
const route = express.Router();

route.get('/rota', (request,response)=>{
    const qParams = request.query; //url params
    const body = request.body; // 
    console.log(body);
    response.json({
        nome: 'Pablo Rodrigo',
        trigger: 'Omnistack Week',
        params: qParams
    });
});

route.get('/rota/:id', (request,response)=>{
    const rParams = request.params; // route params
    response.json({
        nome: 'Pablo Rodrigo',
        trigger: 'Omnistack Week',
        params: rParams
    });
});


module.exports = route;