import React from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarLinks } from '../../sidebarSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../App/providers/withRedux'
import styles from './index.module.scss'

export type SidebarNavLinkProps = {
    route: string
    link: SidebarLinks
    onClick: () => void
    imgActive: string
    imgPassive: string
    text: string
}

const SidebarNavLink = (props: SidebarNavLinkProps) => {
    const sidebarSlice = useSelector((state: RootState) => state.sidebar)

    return (
        <NavLink
            to={props.route}
            onClick={props.onClick}
            className={styles.sidebarLink}
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
        </NavLink>
    )
}

export default SidebarNavLink
