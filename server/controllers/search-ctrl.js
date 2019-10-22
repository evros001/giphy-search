const { getSearch } = require('../services/search-service')

getGifs = async (req, res) => {
  await getSearch(req.params.term)
    .catch(err => { 
      console.log("error occured: ", err)
    })
}


module.exports = {
  getGifs,
}
