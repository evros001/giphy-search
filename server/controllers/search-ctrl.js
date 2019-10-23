const { getSearch } = require('../services/search-service')

getGifs = async (req, res) => {
  try {
    const response = await getSearch(req.params.term)
    res.json(response)
  } 
  catch (err) {
    console.log(err)
  }

}

// getGifById = async (req, res) => {
//   await Movie.findOne({ _id: req.params.id }, (err, movie) => {
//     if (err) {
//       return res.status(400).json({
//         success: false,
//         error: err,
//       })
//     }

//     if (!movie) {
//       return res.status(404).json({
//         success: false,
//         error: 'Movie Not Found',
//       })
//     }

//     return res.status(200).json({
//       success: true,
//       data: movie,
//     }).catch(err => { console.log(err) })
//   })
// }

module.exports = {
  getGifs,
}
