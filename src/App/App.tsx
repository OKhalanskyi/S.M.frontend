import { withRouter } from './providers/withRouter'
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import { LanguageProvider } from '../Shared/context/language.context'
import { Provider } from 'react-redux'
import { store } from './providers/withRedux'

function App() {
    return (
        <Provider store={store}>
            <LanguageProvider>
                <RouterProvider router={withRouter} />
            </LanguageProvider>
        </Provider>
    )
}

export default App
