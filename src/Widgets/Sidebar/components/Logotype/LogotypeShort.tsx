import React from 'react'
import instagramShortLogo from '../../../../Shared/assets/instagramShortLogo.png'
import styles from './index.module.scss'

const LogotypeShort = () => {
    return (
        <div className={styles.logoShort}>
            <a className={styles.link}>
                <span>
                    <img src={instagramShortLogo} alt={'img'} />
                </span>
            </a>
        </div>
    )
}

export default LogotypeShort
