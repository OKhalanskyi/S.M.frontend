import React from 'react'
import styles from './index.module.scss'
import GreetingAnimatingPicture from '../../Features/Auth/GreetingAnimatingPictures/GreetingAnimatingPicture'
import SignUpWidget from '../../Widgets/Auth/SignUpWidget/SignUpWidget'
import Footer from '../../Widgets/Footer/Footer'

const AuthPage = () => {
    return (
        <div className={styles.root}>
            <main className={styles.wrapper}>
                <GreetingAnimatingPicture />
                <SignUpWidget />
            </main>
            <Footer />
        </div>
    )
}

export default AuthPage
