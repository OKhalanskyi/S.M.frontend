import React from 'react'
import styles from './index.module.scss'
import Logotype from './components/Logotype/Logotype'
import LogotypeShort from './components/Logotype/LogotypeShort'
import { useSelector } from 'react-redux'
import { RootState } from '../../App/providers/withRedux'
import SidebarNav from './components/SidebarNav/SidebarNav'
import SidebarMoreBtn from './components/SidebarNavItem/SidebarMoreBtn'

const Sidebar = () => {
    const sidebarSlice = useSelector((state: RootState) => state.sidebar)

    return (
        <div
            className={styles.sidebar}
            style={{ width: sidebarSlice.isOpen ? '246px' : '72px' }}
        >
            {sidebarSlice.isOpen ? <Logotype /> : <LogotypeShort />}
            <SidebarNav />
            <SidebarMoreBtn
                text={'More'}
                onClick={() => console.log('clicked more')}
            />
        </div>
    )
}

export default Sidebar
