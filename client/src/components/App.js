import React, { Component } from 'react';
import { ReactComponent as Giphylogo } from '../images/giphy-logo.svg';
import axios from 'axios'
import appConfig from '../config/app-config'
import styles from '../stylesheets/app.module.scss'
import SearchContainer from './SearchContainer'
import ResultsContainer from './ResultsContainer'
// import DetailContainer from './DetailContainer'

const { apiBaseSearchUrl, apiBaseTrendingUrl } = appConfig

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      results: [],
      query: undefined,
      isDetail: false
    }

    this.getResponse = this.getResponse.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.getResponse = this.getResponse.bind(this)
  }

  // handle response
  getResponse = async (e) => {
    const { query } = this.state

    if(e) {
      e.preventDefault()
    }

    const url = this.state.query 
      ? `${apiBaseSearchUrl}${query}`
      : apiBaseTrendingUrl

    // const query = this.state.query
    // const url = `${apiBaseSearchUrl}${query}`

    await axios.get(url)
      .then(res => {
        this.setState({
          results: res.data.data
        })
        console.log(this.state.results)
      })
      .catch(err => { 
        console.log(err) 
      })
  }

  // get initial results
  componentDidMount() {
    this.getResponse()
  }

  // handle input
  handleInputChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    const { results, query, isDetail, loading } = this.state
    console.log(results)

    return (
      <div className={styles.container}>
        <div className={styles.gradient}></div>
        <div className={styles.wrapper}>
          <Giphylogo className={styles.logo}/>
          <SearchContainer 
            handleInputChange={this.handleInputChange}
            getResponse={this.getResponse} 
          />
          {/*<TabContainer />*/}
        </div>
        <ResultsContainer results={results} />
      </div>
    )
  }
}

export default App;
