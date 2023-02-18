import React from 'react'
import styles from './index.module.scss'
import Sidebar from '../../Widgets/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className={styles.root}>
            <Sidebar />
            <div className={styles.main}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
