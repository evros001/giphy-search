import React, { Component } from 'react'
import { ReactComponent as SeachIcon } from '../images/search-icon.svg';
import styles from '../stylesheets/search-container.module.scss'


function SearchContainer (props) {
  const { handleInputChange, getResponse } = props
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={getResponse}>
        <input
          className={styles.input}
          type='text'
          placeholder="Search for..."
          onChange={handleInputChange}
        />
        <button className={styles.button} type='submit'>
          <SeachIcon />
        </button>
      </form>
      {/*soon to be dynamic with tabs/random implementation*/}
      <div className=''>Trending</div>
    </div>
  )
}

export default SearchContainer