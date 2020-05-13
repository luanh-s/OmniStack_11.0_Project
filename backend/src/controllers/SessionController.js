const connection = require('../database/connection');

module.exports = {

    // async index(request, response) {
    //     const incidents = await connection('incidents').select('*');
    //     return response.json(incidents);
    // },

    async create(request, response) {
        const { email, password } = request.body;
        // const { id } = request.body;

        const ong = await connection('ongs').where('email', email).where('password', password).select('name','id').first();

        if (!ong) {
            return response.status(400).json({error: 'No ONG found with this Login'});
        }

        return response.json(ong);
    }
}