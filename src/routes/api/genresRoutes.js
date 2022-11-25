const express = require('express');
const router = express.Router();
const apiController = require('../../controllers/api/genresController');

router.get('/genres',apiController.list)


module.exports = router