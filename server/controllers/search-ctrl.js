const { getSearch } = require('../services/search-service')

getGifs = async (req, res) => {
  try {
    const response = await getSearch(req.params.query, req.params.offset)
    res.json(response)
  } 
  catch (err) {
    console.log(err)
  }

}

module.exports = {
  getGifs,
}
