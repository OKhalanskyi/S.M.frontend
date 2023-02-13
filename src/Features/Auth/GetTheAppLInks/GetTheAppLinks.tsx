import React from 'react'
import styles from './index.module.scss'
import googlePlayLink from '../../../Shared/assets/googlePlayLink.png'
import appStoreLink from '../../../Shared/assets/appStoreLink.png'
import { useTranslation } from 'react-i18next'

const GetTheAppLinks = () => {
    const { t } = useTranslation()

    return (
        <div className={styles.getTheAppWrapper}>
            <h6>{t('auth.getTheApp')}</h6>
            <div className={styles.getTheAppLinks}>
                <a>
                    <img src={appStoreLink} />
                </a>
                <a>
                    <img src={googlePlayLink} />
                </a>
            </div>
        </div>
    )
}

export default GetTheAppLinks
