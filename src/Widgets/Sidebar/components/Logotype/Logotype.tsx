import React from 'react'
import styles from './index.module.scss'
import instagramLogo from '../../../../Shared/assets/InstagramLogo.png'

const Logotype = () => {
    return (
        <div className={styles.logoLong}>
            <a>
                <img src={instagramLogo} alt={'qq'} />
            </a>
        </div>
    )
}

export default Logotype
