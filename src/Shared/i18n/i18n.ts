import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import english from './translation/english.json'
import ukrainian from './translation/ukrainian.json'

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: english,
        },
        ua: {
            translation: ukrainian,
        },
    },
})
