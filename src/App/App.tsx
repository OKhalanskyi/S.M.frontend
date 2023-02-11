import { withRouter } from './providers/withRouter'
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import { LanguageProvider } from '../Shared/context/language.context'

function App() {
    return (
        <LanguageProvider>
            <RouterProvider router={withRouter} />
        </LanguageProvider>
    )
}

export default App
