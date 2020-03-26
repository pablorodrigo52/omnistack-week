const express = require('express');

const app = express();
app.use(express.json()); //wll pass a json in a body of my requests

app.get('/rota', (request,response)=>{
    const qParams = request.query; //url params
    const body = request.body; // 
    console.log(body);
    response.json({
        nome: 'Pablo Rodrigo',
        trigger: 'Omnistack Week',
        params: qParams
    });
});

app.get('/rota/:id', (request,response)=>{
    const rParams = request.params; // route params
    response.json({
        nome: 'Pablo Rodrigo',
        trigger: 'Omnistack Week',
        params: rParams
    });
});

app.listen(3333);