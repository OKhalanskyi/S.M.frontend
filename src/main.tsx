import React from 'react'
import ReactDOM from 'react-dom/client'
import './App/styles/global.css'
import { RouterProvider } from 'react-router-dom'
import { withRouter } from './App/providers/withRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={withRouter} />
    </React.StrictMode>
)
