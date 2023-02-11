import React from 'react'
import styles from './index.module.scss'
import LanguageChanger from '../../Features/LanguageChanger/LanguageChanger'
import { useTranslation } from 'react-i18next'
const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer className={styles.root}>
            <div className={styles.footerWrapper}>
                <div className={styles.listContainer}>
                    <a href="" className={styles.link}>
                        {t('footer.meta')}
                    </a>
                    <a href="" className={styles.link}>
                        {t('footer.about')}
                    </a>
                    <a href="" className={styles.link}>
                        {t('footer.blog')}
                    </a>
                    <a href="" className={styles.link}>
                        {t('footer.jobs')}
                    </a>
                    <a href="" className={styles.link}>
                        {t('footer.help')}
                    </a>
                    <a href="" className={styles.link}>
                        {t('footer.api')}
                    </a>
                    <a href="" className={styles.link}>
                        {t('footer.privacy')}
                    </a>
                    <a href="" className={styles.link}>
                        {t('footer.terms')}
                    </a>
                    <a href="" className={styles.link}>
                        {t('footer.topAccounts')}
                    </a>
                    <a href="" className={styles.link}>
                        {t('footer.locations')}
                    </a>
                    <a href="" className={styles.link}>
                        {t('footer.instagramLite')}
                    </a>
                    <a href="" className={styles.link}>
                        {t('footer.contact')}
                    </a>
                </div>
                <div className={styles.footerBottom}>
                    <LanguageChanger />
                    <p>{t('footer.watermark')}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
