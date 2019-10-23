// mock request
// https://api.giphy.com/v1/gifs/search?api_key=OxgPHq5Lo88vYBbr52PeueBl0QzB58ib&q=THIS_IS_A_QUERY&limit=25&offset=0&rating=G&lang=en

const axios = require('axios');

const baseSearchURL = 'https://api.giphy.com/v1/gifs/search'
const apiKey = process.env.GIPHYAPIKEY

const getSearch = async (query, limit = 1) => {
	const url = `${baseSearchURL}?api_key=${apiKey}&q=${query}&limit=${limit}`
	
  try {
    const results = await axios.get(url)
    return results.data
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = { 
	getSearch,
}