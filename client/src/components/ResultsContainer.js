import React from 'react'
import styles from '../stylesheets/results-container.module.scss'
import GifCard from './GifCard'

function ResultsContainer (props) {
  const { results } = props

  console.log('props', props)

  const gifList = results.map((result, index) => (
    <GifCard 
      key={index} 
      result={result} 
      index={index}
      className={styles.card}
    />
  ))

  return (
    <div className={styles.container}>
      { gifList }
    </div>
  )
}

export default ResultsContainer