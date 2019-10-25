const express = require('express')
const SearchCtrl = require('../controllers/search-ctrl')
const TrendingCtrl = require('../controllers/trending-ctrl')
const router = express.Router()

// router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/search/:query/:offset/:limit', SearchCtrl.getGifs)
router.get('/trending/:offset/:limit', TrendingCtrl.getGifs)

module.exports = router