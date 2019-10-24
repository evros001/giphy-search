import React from 'react'
import GifCard from './GifCard'

function ResultsContainer (props) {
  const { results } = props

  const gifList = results.map((result, index) => (
    <GifCard key={index} result={result} index={index} />
  ))

  return (
    <div className="gifs-container">
      { gifList }
    </div>
  )
}

export default ResultsContainer