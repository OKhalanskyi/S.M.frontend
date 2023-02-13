import React from 'react'
import styles from './index.module.scss'
import instagramLogo from '../../../Shared/assets/InstagramLogo.png'
import AuthInput from '../../../Shared/UI/AuthInput/AuthInput'
import AuthButton from '../../../Shared/UI/AuthButton/AuthButton'
import AuthButtonTransparent from '../../../Shared/UI/AuthButton/AuthButtonTransparent'
import { useTranslation } from 'react-i18next'

const SignInFeature = () => {
    const { t } = useTranslation()
    return (
        <div className={styles.signInMenu}>
            <div className={styles.signUpLogo}>
                <img src={instagramLogo} />
            </div>
            <form className={styles.signInForm}>
                <AuthInput placeholder={t('auth.signIn.placeholders.email')} />
                <AuthInput
                    placeholder={t('auth.signIn.placeholders.password')}
                />
                <div className={styles.btnContainer}>
                    <AuthButton
                        disabled={true}
                        onClick={() => {
                            console.log('clicked')
                        }}
                    >
                        {t('auth.signIn.signIn')}
                    </AuthButton>
                </div>
                <div className={styles.separator}>
                    <div className={styles.line}></div>
                    <div className={styles.separateText}>{t('auth.or')}</div>
                    <div className={styles.line}></div>
                </div>
                <AuthButtonTransparent
                    onClick={() => {
                        console.log('clicked')
                    }}
                >
                    <span className={styles.facebookLogo}></span>
                    {t('auth.loginWithFacebook')}
                </AuthButtonTransparent>
                <a className={styles.forgotPassLink}>
                    {t('auth.signIn.forgotPassword')}
                </a>
            </form>
        </div>
    )
}

export default SignInFeature
