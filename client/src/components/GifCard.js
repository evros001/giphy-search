import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import Overlay from './Overlay'
import styles from '../stylesheets/gif-card.module.scss'

class GifCard extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      isLoading: true,
      active: true,
      overlayActive: false
    }

    this.handleGifLoaded = this.handleGifLoaded.bind(this)
    this.openOverlay = this.openOverlay.bind(this)
    this.closeOverlay = this.closeOverlay.bind(this)
    this.copylink = this.copylink.bind(this)
  }

  // timeout for UX benefit, response comes very quickly 
  handleGifLoaded () {
    this.setState({
      isLoading: false
    })
  }

  copylink (e) {
    console.log('hit', e.currentTarget.dataset.link)
    // console.log("e.target")
  }

  closeOverlay (e) {
    e.stopPropagation()

    this.setState({
      overlayActive: false
    })
  }

  openOverlay () {
    console.log("OPEN")
    this.setState({
      overlayActive: true
    })
  }

  render () {
    const { result, index } = this.props
    const { isLoading, overlayActive } = this.state
   
    const displayType = isLoading 
      ? styles.hide 
      : styles.show

    return (
      <div className={styles.container} onClick={this.openOverlay}>
        <Overlay
          link={result.images.original.url} 
          overlayActive={overlayActive}
          closeOverlay={this.closeOverlay}
          copylink={this.copylink} 
        />
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