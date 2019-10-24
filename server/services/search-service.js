const axios = require('axios');

const baseSearchURL = 'https://api.giphy.com/v1/gifs/search'
const apiKey = process.env.GIPHYAPIKEY

const getSearch = async (query) => {
	const url = `${baseSearchURL}?api_key=${apiKey}&q=${query}`
	
  try {
    const results = await axios.get(url)
    return results.data
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = { getSearch }