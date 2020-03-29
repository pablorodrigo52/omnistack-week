const conn = require('../database/connection');

module.exports = {

    async list (request, response)
    {
        console.log('/incidents - LIST');
        const {page = 1} = request.query;

        const [count] = await conn('incidents').count();

        const incidents = await conn('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5) // pagination
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);
    },


    async create (request, response)
    {
        console.log('/incidents - CREATE');
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await conn('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        return response.json({id});
    },
    async delete (request, response)
    {
        console.log('/incidents - DELETE');
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await conn('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        if (incident.ong_id != ong_id)
        {
            return response.status(401).json({error: "Operation Not Permited"}); // unauthorized
        }
        await conn('incidents').where('id', id).delete();
        return response.status(204).send(); // send envia resposta vazia (sem conteudo = 204)
    },
};