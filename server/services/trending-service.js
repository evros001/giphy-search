const axios = require('axios');

const baseTrendingURL = 'https://api.giphy.com/v1/gifs/trending'
const apiKey = process.env.GIPHYAPIKEY

const getTrending = async (offset = 0, limit = 25) => {
	const url = `${baseTrendingURL}?api_key=${apiKey}&offset=${offset}&limit=${limit}`
	
  try {
    const results = await axios.get(url)
    return results.data
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = { getTrending }