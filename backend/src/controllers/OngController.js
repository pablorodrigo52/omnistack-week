const crypto = require('crypto');
const conn = require('../database/connection');
module.exports = {
    async list (request, response){
        console.log('/ongs - LIST');
        const ongs = await conn('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response)
    {
        console.log('/ongs - CREATE');
        const {name, email, whatsapp, city, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX'); // 4 chars in HEXADECIMAL
        await conn('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
        return response.json({id});
    }

    /*
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
*/


};