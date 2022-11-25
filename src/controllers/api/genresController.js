const db = require('../../database/models');
const sequelize = db.sequelize;

module.exports = {
    list: function (req,res) {
        db.Genre.findAll()
        .then(genres => {
            let response = {
                meta : {
                    status: 200,
                    totalDeGeneros: genres.length,
                    url: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                },
                data: genres
            }
            return res.status(200).json(response)
        })
        .catch(errors => res.status(500).json('error al acceder a la informacion'))
    }
}


