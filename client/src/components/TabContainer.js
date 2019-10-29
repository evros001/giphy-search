import React from 'react'
import appConfig from '../config/app-config'
import Loader from 'react-loader-spinner'
import styles from '../stylesheets/tab-container.module.scss'

function TabContainer (props) {
  const { 
    tabTitle, 
    totalGifCount,
    loading,
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
      { loading &&
        <Loader
          visible={loading}
          type="Oval"
          color="#000000"
          height={50}
          width={50}
          className={styles.loader}
        />
      }
      { !loading &&
        <React.Fragment>
          <span className={hasResults}>{title}</span>
            {   emptyPayload &&
              <span className={styles.count}>{totalGifCount}</span>
            }
        </React.Fragment>
      }
    </div>
  )
}

export default TabContainer