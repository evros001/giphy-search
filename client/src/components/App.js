import React, { Component } from 'react';
import logo from '../images/logo.svg';
import axios from 'axios'
import apiConfig from '../config/api-config'
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      results: [],
      query: ''
    }

    this.getResponse = this.getResponse.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  // handle response
  getResponse = async () => {
    const { baseUrl } = apiConfig
    const query = this.state.query
    const url = `${baseUrl}${query}`

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
  handleInputChange() {
    this.setState({
      query: this.search.value
    }, () => {
      this.getResponse()
    })
  }

  render() {
    const results = this.state.results

    return (
      <div className="App">
        <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
          <p>{this.state.query}</p>
       </form>
        <div className="gifs-container">
          {this.state.results.map((result, index) => (
            <img 
              key={index}
              className="gif-img"
              src={result.images.preview_gif.url} 
              alt={result.title}  
              width={result.images.preview_gif.width}/>
          ))}
        </div>
      </div>
    )
  }
}

export default App;
