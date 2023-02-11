import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './App/styles/global.css'
import { RouterProvider } from 'react-router-dom'
import { withRouter } from './App/providers/withRouter'
import './Shared/i18n/i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Suspense fallback={'loading'}>
            <RouterProvider router={withRouter} />
        </Suspense>
    </React.StrictMode>
)
