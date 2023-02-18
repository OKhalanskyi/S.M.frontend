import { createBrowserRouter } from 'react-router-dom'
import AuthPage from '../../Pages/Auth/Auth.page'
import Layout from '../../Pages/Layout/Layout'
import { Routes } from './Routes'
import ExplorePage from '../../Pages/Explore/ExplorePage'
import DirectPage from '../../Pages/DirectPage/DirectPage'
import ReelsPage from '../../Pages/Reels/ReelsPage'
import ProfilePage from '../../Pages/Profile/ProfilePage'
import HomePage from '../../Pages/HomePage/HomePage'

export const withRouter = createBrowserRouter([
    {
        path: Routes.Auth,
        element: <AuthPage />,
    },
    {
        path: Routes.Home,
        element: <Layout />,
        children: [
            {
                element: <HomePage />,
                index: true,
            },
            {
                path: Routes.Explore,
                element: <ExplorePage />,
            },
            {
                path: Routes.Direct,
                element: <DirectPage />,
            },
            {
                path: Routes.Reels,
                element: <ReelsPage />,
            },
            {
                path: Routes.Profile,
                element: <ProfilePage />,
            },
        ],
    },
])
