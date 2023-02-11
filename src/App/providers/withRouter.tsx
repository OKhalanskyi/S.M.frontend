import { createBrowserRouter } from 'react-router-dom'
import AuthPage from '../../Pages/Auth/Auth.page'

export const withRouter = createBrowserRouter([
    {
        path: '/',
        element: <AuthPage />,
    },
    {
        path: '/1',
        element: <>idi nah</>,
    },
])
