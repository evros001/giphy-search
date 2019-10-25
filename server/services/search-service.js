const axios = require('axios');

const baseSearchURL = 'https://api.giphy.com/v1/gifs/search'
const apiKey = process.env.GIPHYAPIKEY

const getSearch = async (query, offset = 0, limit = 25) => {
	const url = `${baseSearchURL}?api_key=${apiKey}&q=${query}&offset=${offset}&limit=${limit}`
	
  try {
    const results = await axios.get(url)
    return results.data
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = { getSearch }