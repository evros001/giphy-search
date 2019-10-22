const express = require('express')
const SearchCtrl = require('../controllers/search-ctrl')
const router = express.Router()

// router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/search/:term', SearchCtrl.getGifs)

module.exports = router