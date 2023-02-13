import React, { useState } from 'react'
import styles from './index.module.scss'
import GetTheAppLinks from '../../../Features/Auth/GetTheAppLInks/GetTheAppLinks'
import SignUpFeature from '../../../Features/Auth/SignUpFeature/SignUpFeature'
import { useTranslation } from 'react-i18next'
import SignInFeature from '../../../Features/Auth/SignInFeature/SignInFeature'

const AuthFormWidget = () => {
    const { t } = useTranslation()
    const [authFormToggle, setAuthFormToggle] = useState<boolean>(false)
    return (
        <div className={styles.authFormWidget}>
            {authFormToggle ? <SignUpFeature /> : <SignInFeature />}
            <div className={styles.haveAnAccount}>
                <p>
                    {authFormToggle
                        ? t('auth.haveAnAccount.text')
                        : t('auth.dontHaveAnAccount.text')}
                    <a
                        onClick={() => {
                            setAuthFormToggle(!authFormToggle)
                        }}
                    >
                        {authFormToggle
                            ? t('auth.haveAnAccount.link')
                            : t('auth.dontHaveAnAccount.link')}
                    </a>
                </p>
            </div>
            <GetTheAppLinks />
        </div>
    )
}

export default AuthFormWidget
