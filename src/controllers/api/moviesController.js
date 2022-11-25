const db = require('../../database/models');
const sequelize = db.sequelize;

module.exports = {
    create: function (req,res) {
        db.Movie.create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
        .then((resultado)=> {
            let response = {
                meta: {
                    status: 200,
                    message: 'Película creada con éxito',
                    link: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                },
                data: resultado
            }
            return res.status(200).json(response)
        })            
        .catch(error => res.status(500).json('No se pudo acceder a la informacion'))

    },
    destroy: function (req,res) {
        let movieId = req.params.id;
        let movieDelete = db.Movie.findByPk(movieId)
        let moviesUpdated = db.Movie.destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        Promise.all([movieDelete,moviesUpdated])
        .then(([movieDelete,moviesUpdated]) => {
            let response = {
                status: 200,
                meta: {
                    message: `Pelicula eliminada con éxito`,
                    link: `${req.protocol}://${req.get('host')}${req.originalUrl}`
                },
                data: movieDelete
            }
            return res.status(200).json(response)
        })
        .catch(error => res.status(500).json('No se pudo acceder a la informacion')) 
    }

}
