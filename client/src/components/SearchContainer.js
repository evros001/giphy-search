import React, { Component } from 'react'
import { ReactComponent as SeachIcon } from '../images/search-icon.svg';
import styles from '../stylesheets/search-container.module.scss'


function SearchContainer (props) {
  const { getResponse } = props
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={getResponse}>
        <input
          name='query'
          className={styles.input}
          type='text'
          placeholder="Search for..."
        />
        <button className={styles.button} type='submit'>
          <SeachIcon />
        </button>
      </form>
    </div>
  )
}

export default SearchContainer