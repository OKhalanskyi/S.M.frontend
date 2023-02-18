import React from 'react'
import styles from './index.module.scss'
import moreIcon from '../../../../Shared/assets/moreIcon.png'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../App/providers/withRedux'

export type SidebarMoreBtn = {
    text: string
    onClick: () => void
}

const SidebarMoreBtn = (props: SidebarMoreBtn) => {
    const sidebarSlice = useSelector((state: RootState) => state.sidebar)
    return (
        <button onClick={props.onClick} className={styles.sidebarLink}>
            <img className={styles.icon} src={moreIcon} />
            <h4
                className={`${
                    sidebarSlice.isOpen ? styles.text : styles.textHidden
                }`}
            >
                {props.text}
            </h4>
        </button>
    )
}

export default SidebarMoreBtn
