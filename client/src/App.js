import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = { 
      apiKey: undefined 
    }

    this.getResponse = this.getResponse.bind(this)
  }

  getResponse = async () => {
    const response = await fetch('/giphy/key')
    const body = await response.json()

    if (response.status !== 200) {
      throw new Error(body.message)
    }

    return body
  }

  componentDidMount() {
    this.getResponse()
      .then(res => {
        // console.log(res.apiKey)
        this.setState({
          apiKey: res.apiKey
        })
      })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.apiKey}
          </a>
        </header>
      </div>
    )
  }
}

export default App;
