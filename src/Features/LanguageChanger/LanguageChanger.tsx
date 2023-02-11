import React, { ChangeEvent } from 'react'
import styles from './index.module.scss'
import i18n from 'i18next'

const LanguageChanger = () => {
    const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value)
    }
    return (
        <select
            name={'language'}
            className={styles.selector}
            onChange={changeLanguage}
        >
            <option value="en" selected={true}>
                English (UK)
            </option>
            <option value="ua">Українська</option>
        </select>
    )
}

export default LanguageChanger
