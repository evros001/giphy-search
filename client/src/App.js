import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import apiConfig from './config/api-config'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      results: [],
      searchTerm: 'homer'
    }

    this.getResponse = this.getResponse.bind(this)
  }

  getResponse = async () => {
    const { baseUrl } = apiConfig
    const searchTerm = this.state.searchTerm
    const url = `${baseUrl}${searchTerm}`

    await axios.get(url)
      .then(res => {
        this.setState({
          results: res.data.data
        })
      })
      .catch(err => { 
        console.log(err) 
      })
  }

  componentDidMount() {
    this.getResponse()
  }

  render() {
    const results = this.state.results
    console.log(results)
    return (
      <div className="App">
        <ul>
          {this.state.results.map((result, index) => (
            <li key={index}>{result.url}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App;
