import React, { ChangeEvent } from 'react'
import styles from './index.module.scss'
import i18n from 'i18next'
import { useLanguage } from '../../Shared/context/language.context'

const LanguageChanger = () => {
    const { language, setLanguage } = useLanguage()
    console.log(language)
    const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value)
        setLanguage(event.target.value)
        localStorage.setItem('language', event.target.value)
    }
    return (
        <select
            name={'language'}
            className={styles.selector}
            onChange={changeLanguage}
            value={language}
        >
            <option value="en">English (UK)</option>
            <option value="ua">Українська</option>
        </select>
    )
}

export default LanguageChanger

//make fix , create data structure for languages and render by array
