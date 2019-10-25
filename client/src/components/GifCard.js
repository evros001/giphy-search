import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import styles from '../stylesheets/gif-card.module.scss'

class GifCard extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      isLoading: true,
      active: true
    }

    this.handleGifLoaded = this.handleGifLoaded.bind(this)
  }

  // timeout for UX benefit, response comes very quickly 
  handleGifLoaded () {
    this.setState({
      isLoading: false
    })
  }

  render () {
    const { 
      result, 
      index, 
      displayDetail
    } = this.props

    const { isLoading } = this.state
    const displayType = isLoading 
      ? styles.hide 
      : styles.show

    return (
      <div className={styles.container} onClick={displayDetail}>
        <Loader
          key={index + 1}
          visible={isLoading}
          type="Oval"
          color="#ffffff"
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