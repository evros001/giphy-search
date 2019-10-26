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
      offset: 0,
      isDetail: false,
      tabTitle: null,
      totalGifCount: null,
      error: false,
      validSearch: false,
      limit: 25
    }

    this.getResponse = this.getResponse.bind(this)
    this.getResponse = this.getResponse.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.baseState = this.state 
  }

  // handle response
  getResponse = async (e, isPagination = false) => {
    const query = document.getElementsByName('query')[0].value
    const { offset, limit } = this.state
    const { gifTab, trending, error } = appConfig
    console.log("QUERY", query)

    if(e) {
      e.preventDefault()
    }

    if (!isPagination) {
      this.setState(this.baseState)
    }

    const url = query 
      ? `${apiBaseSearchUrl}${query}/${offset}/${limit}`
      : `${apiBaseTrendingUrl}${query}/${offset}/${limit}`

    const tabTitle = query
      ? gifTab
      : trending

    await axios.get(url)
      .then(res => {
        const { count } = res.data.pagination
        this.setState(prevState => ({
          results: [...prevState.results, ...res.data.data],
          offset: prevState.offset += count,
          totalGifCount: res.data.pagination.total_count,
          tabTitle: tabTitle,
          validSearch: true,
        }))
        console.log(this.state)
      })
      .catch(err => {
        const errorMessage = `${error}${err.message}`
        this.setState({
          error: true,
          tabTitle: errorMessage
        }) 
        console.log(err.message) 
      })
  }

  handleScroll = async (query) => {
    console.log("handleScroll", query)
    await this.getResponse(window.event, true)
  }

  // get initial results
  componentDidMount () {
    this.getResponse()
  }

  // // handle input
  // handleInputChange(e) {
  //   const query = document.getElementsByName('query')[0].value

  //   this.setState({ query })
    
  //   // this.setState({
  //   //   query: e.target.value
  //   // })
  // }

  render() {
    const { 
      results, 
      isDetail, 
      loading, 
      tabTitle,
      totalGifCount,
      validSearch,
      error
    } = this.state

    console.log(results)

    return (
      <div className={styles.container} >
        <div className={styles.gradient}></div>
        <div className={styles.wrapper}>
          <Giphylogo className={styles.logo}/>
          <SearchContainer 
            getResponse={this.getResponse} 
          />
          <TabContainer
            error={error} 
            tabTitle={tabTitle} 
            totalGifCount={totalGifCount}
            validSearch={validSearch}
          />
        </div>
        <ResultsContainer 
          results={results}
          copylink={this.copylink}
        />
        <BottomScrollListener onBottom={this.handleScroll} />
      </div>
    )
  }
}

export default App;
