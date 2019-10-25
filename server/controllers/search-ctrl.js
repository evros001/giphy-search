const { getSearch } = require('../services/search-service')

getGifs = async (req, res) => {
  try {
    const { query, offset, limit } = req.params
    const response = await getSearch(query, offset, limit)
    res.json(response)
  } 
  catch (err) {
    console.log(err)
  }

}

module.exports = {
  getGifs,
}
