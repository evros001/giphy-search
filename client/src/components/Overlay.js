import React from 'react'
import { ReactComponent as CopyLink } from '../images/copy-link.svg';
import styles from '../stylesheets/overlay.module.scss'

function Overlay (props) {
  const { 
    copylink, 
    closeOverlay, 
    overlayActive,
    link,
    linkIsCopied
  } = props

  const display = overlayActive
    ? styles.show
    : styles.hide

  return (
    <div className={display}>
      { !linkIsCopied &&
        <React.Fragment>
          <div className={styles.copy} onClick={copylink} data-link={link}>
            <CopyLink className={styles.icon} /> 
            <span className={styles.clipboard}>Copy</span>
          </div>
          <div className={styles.close} onClick={closeOverlay}>
            <span className={styles.cancel}>Cancel</span>
          </div>
        </React.Fragment>
      }
      { linkIsCopied &&
        <React.Fragment>
          <div className={styles.copy} onClick={copylink} data-link={link}>
            <span className={styles.copied}>Copied!</span>
          </div>
          <div className={styles.close} onClick={closeOverlay}>
            <span className={styles.cancel}>Cancel</span>
          </div>
        </React.Fragment>
      }
    </div>
  )
}

export default Overlay