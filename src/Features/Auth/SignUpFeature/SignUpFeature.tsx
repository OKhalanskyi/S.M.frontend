import React from 'react'
import styles from './index.module.scss'
import instagramLogo from '../../../Shared/assets/InstagramLogo.png'
import AuthButton from '../../../Shared/UI/AuthButton/AuthButton'
import AuthInput from '../../../Shared/UI/AuthInput/AuthInput'
import { useTranslation } from 'react-i18next'

const SignUpFeature = () => {
    const { t } = useTranslation()
    return (
        <div className={styles.signUpMenu}>
            <div className={styles.signUpLogo}>
                <img src={instagramLogo} />
            </div>
            <form className={styles.signUpForm}>
                <h2>{t('auth.signUp.invitationText')}</h2>
                <AuthButton
                    disabled={false}
                    onClick={() => {
                        alert(t('hello'))
                    }}
                >
                    <span className={styles.facebookLogo}></span>
                    {t('auth.loginWithFacebook')}
                </AuthButton>
                <div className={styles.separator}>
                    <div className={styles.line}></div>
                    <div className={styles.separateText}>{t('auth.or')}</div>
                    <div className={styles.line}></div>
                </div>
                <AuthInput placeholder={t('auth.signUp.placeholders.email')} />
                <AuthInput
                    placeholder={t('auth.signUp.placeholders.fullName')}
                />
                <AuthInput
                    placeholder={t('auth.signUp.placeholders.username')}
                />
                <AuthInput
                    placeholder={t('auth.signUp.placeholders.password')}
                />
                <div className={styles.textInstruction}>
                    {t('auth.signUp.instructions.top')}
                    <a>{t('auth.signUp.instructions.links.learnMore')}</a>
                    <br />
                    <br />
                    {t('auth.signUp.instructions.bottom')}
                    <a>{t('auth.signUp.instructions.links.terms')}</a>,
                    <a>{t('auth.signUp.instructions.links.privacyPolicy')}</a>
                    {t('auth.signUp.instructions.and')}
                    <a>{t('auth.signUp.instructions.links.cookiesPolicy')}</a>.
                </div>
                <AuthButton disabled={true} onClick={() => alert('ab')}>
                    {t('auth.signUp.signUp')}
                </AuthButton>
            </form>
        </div>
    )
}

export default SignUpFeature
