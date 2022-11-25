const express = require('express');
const router = express.Router();
const apiController = require('../../controllers/api/moviesController');

router.post('/movies',apiController.create)
router.delete('/movies/:id',apiController.destroy)


module.exports = router