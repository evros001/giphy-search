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
      overlayActive: false,
      linkIsCopied: false
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
    const link = e.currentTarget.dataset.link
    
    // create text area to copy dataset gif link then remove
    let textArea = document.createElement("textarea");
    textArea.value = link;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy')
    document.body.removeChild(textArea)

    this.setState({
      linkIsCopied: true
    })
  }

  closeOverlay (e) {
    e.stopPropagation()

    this.setState({
      overlayActive: false,
      linkIsCopied: false
    })
  }

  openOverlay () {
    this.setState({
      overlayActive: true
    })
  }

  render () {
    const { result, index } = this.props
    const { isLoading, overlayActive, linkIsCopied } = this.state
   
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
          linkIsCopied={linkIsCopied} 
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