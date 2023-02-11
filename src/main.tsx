import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './App/styles/global.css'
import './Shared/i18n/i18n'
import App from './App/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Suspense fallback={'loading'}>
            <App />
        </Suspense>
    </React.StrictMode>
)
