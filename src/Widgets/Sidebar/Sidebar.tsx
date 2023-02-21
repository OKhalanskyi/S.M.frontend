import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss'
import Logotype from './components/Logotype/Logotype'
import LogotypeShort from './components/Logotype/LogotypeShort'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../App/providers/withRedux'
import SidebarNav from './components/SidebarNav/SidebarNav'
import SidebarMoreBtn from './components/SidebarNavItem/SidebarMoreBtn'
import SearchPanel from './components/SearchPanel/SearchPanel'
import NotificationsPanel from './components/NotificationsPanel/NotificationsPanel'
import {
    changeLink,
    SidebarLinks,
    toggleNotifyPanel,
    toggleSearchPanel,
    toggleSidebar,
} from './sidebarSlice'
import { Routes } from '../../App/providers/Routes'

const Sidebar = () => {
    const sidebarSlice = useSelector((state: RootState) => state.sidebar)
    const dispatch = useDispatch()
    const sidebarRef = useRef<HTMLDivElement>(null)

    function handleClickOutside(event: MouseEvent) {
        if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target as Node)
        ) {
            if (location.pathname == Routes.Home) {
                dispatch(changeLink(SidebarLinks.Home))
            }
            if (location.pathname == Routes.Explore) {
                dispatch(changeLink(SidebarLinks.Explore))
            }
            if (location.pathname == Routes.Reels) {
                dispatch(changeLink(SidebarLinks.Reels))
            }
            if (location.pathname == Routes.Profile) {
                dispatch(changeLink(SidebarLinks.Profile))
            }
            if (location.pathname == Routes.Direct) {
                dispatch(changeLink(SidebarLinks.Direct))
            }
            dispatch(toggleSidebar(true))
            dispatch(toggleNotifyPanel(false))
            dispatch(toggleSearchPanel(false))
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div
            ref={sidebarRef}
            style={{ width: sidebarSlice.isOpen ? '246px' : '72px' }}
        >
            <SearchPanel />
            <NotificationsPanel />
            <div
                className={styles.sidebar}
                style={{
                    width: sidebarSlice.isOpen ? '246px' : '72px',
                    zIndex: 3,
                }}
            >
                {sidebarSlice.isOpen ? <Logotype /> : <LogotypeShort />}
                <SidebarNav />
                <SidebarMoreBtn
                    text={'More'}
                    onClick={() => console.log('clicked more')}
                />
            </div>
        </div>
    )
}

export default Sidebar
