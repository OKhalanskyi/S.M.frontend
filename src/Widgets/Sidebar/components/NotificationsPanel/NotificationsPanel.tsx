import React from 'react'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../App/providers/withRedux'

const NotificationsPanel = () => {
    const sidebarSlice = useSelector((state: RootState) => state.sidebar)

    return (
        <div
            className={styles.notifyPanel}
            style={{
                width: sidebarSlice.notifyPanel ? '400px' : '0',
                borderRight: sidebarSlice.notifyPanel
                    ? '1px solid lightgray'
                    : '0',
            }}
        >
            <div
                style={{ display: sidebarSlice.notifyPanel ? 'flex' : 'none' }}
            >
                <div>Notifications</div>
                <div>likes</div>
            </div>
        </div>
    )
}

export default NotificationsPanel
