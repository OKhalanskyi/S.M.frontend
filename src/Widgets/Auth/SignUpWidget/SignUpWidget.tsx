import React from 'react'
import styles from './index.module.scss'
import GetTheAppLinks from '../../../Features/Auth/GetTheAppLInks/GetTheAppLinks'
import SignUpFeature from '../../../Features/Auth/SignUpFeature/SignUpFeature'

const SignUpWidget = () => {
    return (
        <div className={styles.signUpWidget}>
            <SignUpFeature />
            <GetTheAppLinks />
        </div>
    )
}

export default SignUpWidget
