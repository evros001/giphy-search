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

module.exports = {
  getGifs,
}
