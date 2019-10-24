const { getTrending } = require('../services/trending-service')

getGifs = async (req, res) => {
  try {
    const response = await getTrending()
    res.json(response)
  } 
  catch (err) {
    console.log(err)
  }

}

module.exports = {
  getGifs,
}
