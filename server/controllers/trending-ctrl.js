const { getTrending } = require('../services/trending-service')

getGifs = async (req, res) => {
  try {
  	const { offset, limit } = req.params
    const response = await getTrending(offset, limit)
    res.json(response)
  } 
  catch (err) {
    console.log(err)
  }

}

module.exports = {
  getGifs,
}
