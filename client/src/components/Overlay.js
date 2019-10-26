import React from 'react'
import { ReactComponent as CopyLink } from '../images/copy-link.svg';
import { ReactComponent as Close } from '../images/close.svg';
import styles from '../stylesheets/overlay.module.scss'

function Overlay (props) {
  const { 
    copylink, 
    closeOverlay, 
    overlayActive,
    link
  } = props

  const display = overlayActive
    ? styles.show
    : styles.hide

  return (
    <div className={display}>
      <div className={styles.copy} onClick={copylink} data-link={link}>
        <CopyLink className={styles.icon} /> 
        <span className={styles.clipboard}>Copy</span>
      </div>
      <div className={styles.close} onClick={closeOverlay}>
        <Close className={styles.close} />
        <span className={styles.cancel}>Cancel</span>
      </div>
    </div>
  )
}

export default Overlay