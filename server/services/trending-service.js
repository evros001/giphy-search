const axios = require('axios');

const baseSearchURL = 'https://api.giphy.com/v1/gifs/trending'
const apiKey = process.env.GIPHYAPIKEY

const getTrending = async () => {
	const url = `${baseSearchURL}?api_key=${apiKey}`
	
  try {
    const results = await axios.get(url)
    return results.data
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = { getTrending }