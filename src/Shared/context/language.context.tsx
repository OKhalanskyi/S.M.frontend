import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
    ReactNode,
} from 'react'

export type Language = string

export interface ILanguageContextInterface {
    language: Language
    setLanguage: Dispatch<SetStateAction<Language>>
}

const defaultState = {
    language: 'en',
    setLanguage: (language: Language) => {},
} as ILanguageContextInterface

const LanguageContext = createContext<ILanguageContextInterface>(defaultState)

const useLanguage = () => useContext(LanguageContext)

type LanguageProvidedProps = {
    children: ReactNode
}

const LanguageProvider = (props: LanguageProvidedProps) => {
    const [language, setLanguage] = useState<Language>('en')

    useEffect(() => {
        setLanguage(localStorage.getItem('language') || 'en')
    }, [])

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export { LanguageProvider, useLanguage }
