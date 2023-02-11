import React, { useState } from 'react'
import styles from './index.module.scss'
import instagramLogo from '../../../Shared/assets/InstagramLogo.png'
import AuthButton from '../../../Shared/UI/AuthButton/AuthButton'
import AuthInput from '../../../Shared/UI/AuthInput/AuthInput'
import { useTranslation } from 'react-i18next'

const SignUpFeature = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.signUpMenu}>
                <div className={styles.signUpLogo}>
                    <img src={instagramLogo} />
                </div>
                <form className={styles.signUpForm}>
                    <h2>{t('signUp.invitationText')}</h2>
                    <AuthButton
                        disabled={false}
                        onClick={() => {
                            alert(t('hello'))
                        }}
                    >
                        <span className={styles.facebookLogo}></span>
                        {t('signUp.loginWithFacebook')}
                    </AuthButton>
                    <div className={styles.separator}>
                        <div className={styles.line}></div>
                        <div className={styles.separateText}>
                            {t('signUp.or')}
                        </div>
                        <div className={styles.line}></div>
                    </div>
                    <AuthInput placeholder={t('signUp.placeholders.email')} />
                    <AuthInput
                        placeholder={t('signUp.placeholders.fullName')}
                    />
                    <AuthInput
                        placeholder={t('signUp.placeholders.username')}
                    />
                    <AuthInput
                        placeholder={t('signUp.placeholders.password')}
                    />
                    <div className={styles.textInstruction}>
                        {t('signUp.instructions.top')}
                        <a>{t('signUp.instructions.links.learnMore')}</a>
                        <br />
                        <br />
                        {t('signUp.instructions.bottom')}
                        <a>{t('signUp.instructions.links.terms')}</a>,
                        <a>{t('signUp.instructions.links.privacyPolicy')}</a>
                        {t('signUp.instructions.and')}
                        <a>{t('signUp.instructions.links.cookiesPolicy')}</a>.
                    </div>
                    <AuthButton disabled={true} onClick={() => alert('ab')}>
                        {t('signUp.signUp')}
                    </AuthButton>
                </form>
            </div>
            <div className={styles.haveAnAccount}>
                <p>
                    {t('signUp.haveAnAccount.text')}
                    <a>{t('signUp.haveAnAccount.link')}</a>
                </p>
            </div>
        </>
    )
}

export default SignUpFeature
