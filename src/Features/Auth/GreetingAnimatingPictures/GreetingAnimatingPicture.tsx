import React from 'react'
import styles from './index.module.scss'
import displayImg from '../../../Shared/assets/displayImg.png'

const GreetingAnimatingPicture = () => {
    return (
        <div className={styles.animatingPictures}>
            <img className={styles.displayImg} src={displayImg} />
        </div>
    )
}

export default GreetingAnimatingPicture
