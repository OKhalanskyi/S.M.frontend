import React from 'react'
import styles from './index.module.scss'
import GreetingAnimatingPicture from '../../Features/Auth/GreetingAnimatingPictures/GreetingAnimatingPicture'
import AuthFormWidget from '../../Widgets/Auth/AuthFormWidget/AuthFormWidget'
import Footer from '../../Widgets/Footer/Footer'

const AuthPage = () => {
    return (
        <div className={styles.root}>
            <main className={styles.wrapper}>
                <GreetingAnimatingPicture />
                <AuthFormWidget />
            </main>
            <Footer />
        </div>
    )
}

export default AuthPage
