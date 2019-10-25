import React from 'react'
import appConfig from '../config/app-config'
import Loader from 'react-loader-spinner'
import styles from '../stylesheets/tab-container.module.scss'

function TabContainer (props) {
  const { 
    tabTitle, 
    totalGifCount, 
    validSearch,
    error 
  } = props

  const { noResults } = appConfig
  const emptyPayload = totalGifCount > 0
  
  const title = emptyPayload || error 
    ? tabTitle
    : noResults

  const hasResults = tabTitle === 'Gifs'
    ? styles.results
    : styles.title

  return (
    <div className={styles.container}>
      <span className={hasResults}>{title}</span>
      {   emptyPayload &&
        <span className={styles.count}>{totalGifCount}</span>
      }
    </div>
  )
}

export default TabContainer