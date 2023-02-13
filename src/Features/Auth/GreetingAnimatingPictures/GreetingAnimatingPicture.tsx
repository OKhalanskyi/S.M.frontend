import React from 'react'
import styles from './index.module.scss'
import displayImg from '../../../Shared/assets/displayImg.png'
import displayImg2 from '../../../Shared/assets/displayImg2.png'
import displayImg3 from '../../../Shared/assets/displayImg3.png'
import displayImg4 from '../../../Shared/assets/displayImg4.png'

const GreetingAnimatingPicture = () => {
    return (
        <div className={styles.animatingPictures}>
            <img
                className={`${styles.displayImg} ${styles.img1}`}
                src={displayImg}
            />
            <img
                className={`${styles.displayImg} ${styles.img2}`}
                src={displayImg2}
            />
            <img
                className={`${styles.displayImg} ${styles.img3}`}
                src={displayImg3}
            />
            <img
                className={`${styles.displayImg} ${styles.img4}`}
                src={displayImg4}
            />
        </div>
    )
}

export default GreetingAnimatingPicture
