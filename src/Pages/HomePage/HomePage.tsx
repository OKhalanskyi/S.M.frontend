import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeLink, SidebarLinks } from '../../Widgets/Sidebar/sidebarSlice'
import styles from './index.module.scss'

const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeLink(SidebarLinks.Home))
    })
    return (
        <div className={styles.homeRoot}>
            <div>posts</div>
            <div>second</div>
        </div>
    )
}

export default HomePage
