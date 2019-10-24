import React, { Component } from 'react';
import { ReactComponent as Giphylogo } from '../images/giphy-logo.svg';
import axios from 'axios'
import appConfig from '../config/app-config'
import styles from '../stylesheets/app.module.scss'
import SearchContainer from './SearchContainer'
import ResultsContainer from './ResultsContainer'
import TabContainer from './TabContainer'

const { apiBaseSearchUrl, apiBaseTrendingUrl } = appConfig

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      results: [],
      query: undefined,
      isDetail: false,
      tabTitle: null,
      totalGifCount: null,
      error: null,
      validSearch: false
    }

    this.getResponse = this.getResponse.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.getResponse = this.getResponse.bind(this)
  }

  // handle response
  getResponse = async (e) => {
    const { query } = this.state
    const { gifTab, trending, error } = appConfig

    if(e) {
      e.preventDefault()
    }

    const url = this.state.query 
      ? `${apiBaseSearchUrl}${query}`
      : apiBaseTrendingUrl

    const tabTitle = this.state.query
      ? gifTab
      : trending

    await axios.get(url)
      .then(res => {
        this.setState({
          results: res.data.data,
          totalGifCount: res.data.pagination.total_count,
          tabTitle: tabTitle,
          validSearch: true
        })
        console.log(this.state.results)
      })
      .catch(err => {
        const errorMessage = `${error}${err.message}`
        this.setState({
          tabTitle: errorMessage
        }) 
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
    const { 
      results, 
      query, 
      isDetail, 
      loading, 
      tabTitle,
      totalGifCount,
      validSearch
    } = this.state

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
          <TabContainer 
            tabTitle={tabTitle} 
            totalGifCount={totalGifCount}
            validSearch={validSearch}
          />
        </div>
        <ResultsContainer results={results} />
      </div>
    )
  }
}

export default App;
