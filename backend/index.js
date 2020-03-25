const express = require('express');

const app = express();

app.get('/', (request,response)=>{
    response.json({
        nome: 'Pablo Rodrigo',
        trigger: 'Omnistack Week'
    });
});

app.listen(3333);