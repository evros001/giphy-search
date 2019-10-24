import React, { Component } from 'react';
import { ReactComponent as Giphylogo } from '../images/giphy-logo.svg';
import axios from 'axios'
import BottomScrollListener from 'react-bottom-scroll-listener';
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
      offset: 0,
      isDetail: false,
      tabTitle: null,
      totalGifCount: null,
      error: null,
      validSearch: false
    }

    this.getResponse = this.getResponse.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.getResponse = this.getResponse.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.baseState = this.state 
  }

  // handle response
  getResponse = async (e, isPagination = false) => {
    const { query, offset } = this.state
    const { gifTab, trending, error } = appConfig

    if(e) {
      e.preventDefault()
    }

    if (!isPagination) {
      this.setState(this.baseState)
    }

    const url = query 
      ? `${apiBaseSearchUrl}${query}/${offset}`
      : apiBaseTrendingUrl

    const tabTitle = this.state.query
      ? gifTab
      : trending

    await axios.get(url)
      .then(res => {
        console.log(res.data.pagination)
        const { offset, count } = res.data.pagination
        this.setState(prevState => ({
          results: [...prevState.results, ...res.data.data],
          offset: offset + count,
          totalGifCount: res.data.pagination.total_count,
          tabTitle: tabTitle,
          validSearch: true,
        }))
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

  handleScroll() {
    this.getResponse(window.event, true)
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
      <div className={styles.container} >
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
        <ResultsContainer 
          results={results} 
        />
        <BottomScrollListener onBottom={this.handleScroll} />
      </div>
    )
  }
}

export default App;
