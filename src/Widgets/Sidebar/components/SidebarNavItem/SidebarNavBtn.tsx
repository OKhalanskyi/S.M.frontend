import React from 'react'
import { SidebarLinks } from '../../sidebarSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../App/providers/withRedux'
import styles from './index.module.scss'

export type SidebarNavBtnProps = {
    link: SidebarLinks
    imgActive: string
    imgPassive: string
    text: string
    onClick: () => void
}

const SidebarNavBtn = (props: SidebarNavBtnProps) => {
    const sidebarSlice = useSelector((state: RootState) => state.sidebar)

    return (
        <button
            onClick={props.onClick}
            className={styles.sidebarLink}
            style={{
                border:
                    sidebarSlice.activeLink == props.link
                        ? '1px solid lightgray'
                        : 'none',
            }}
        >
            <img
                className={styles.icon}
                src={
                    sidebarSlice.activeLink == props.link
                        ? props.imgActive
                        : props.imgPassive
                }
            />
            <h4
                className={`${
                    sidebarSlice.isOpen ? styles.text : styles.textHidden
                } ${
                    sidebarSlice.activeLink == props.link
                        ? styles.textActive
                        : ''
                }`}
            >
                {props.text}
            </h4>
        </button>
    )
}

export default SidebarNavBtn
