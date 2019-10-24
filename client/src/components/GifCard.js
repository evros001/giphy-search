import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import styles from '../stylesheets/gif-card.module.scss'

class GifCard extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      isLoading: true
    }

    this.handleGifLoaded = this.handleGifLoaded.bind(this)
  }

  // timeout for UX benefit, response comes very quickly 
  handleGifLoaded () {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 500) 
  }

  render () {
    const { result, index } = this.props
    const { isLoading } = this.state
    const displayType = isLoading 
      ? styles.hide 
      : styles.show

    return (
      <div className={styles.container}>
        <Loader
          key={index + 1}
          visible={isLoading}
          type="Oval"
          color="#00BFFF"
          className={styles.loader}
        />
        <img
          key={index}
          className={`${displayType} ${styles.gif}`}
          src={result.images.original.url}
          onLoad={this.handleGifLoaded} 
          alt={result.title}  
          width={result.images.downsized_large.width}
        />
      </div>
    )
  }
}

export default GifCard