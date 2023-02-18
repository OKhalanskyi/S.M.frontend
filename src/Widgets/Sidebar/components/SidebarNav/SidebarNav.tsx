import React from 'react'
import { useLocation } from 'react-router-dom'
import { changeLink, SidebarLinks, toggleSidebar } from '../../sidebarSlice'
import { Routes } from '../../../../App/providers/Routes'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../App/providers/withRedux'
import homeActive from '../../../../Shared/assets/homeActive.png'
import homePassive from '../../../../Shared/assets/homeP.png'
import searchActive from '../../../../Shared/assets/searchActive.png'
import searchPassive from '../../../../Shared/assets/searchPassive.png'
import exploreActive from '../../../../Shared/assets/exploreActive.png'
import explorePassive from '../../../../Shared/assets/explorePassive.png'
import reelsActive from '../../../../Shared/assets/reelsActive.png'
import reelsPassive from '../../../../Shared/assets/reelsPassive.png'
import directPassive from '../../../../Shared/assets/directPassive.png'
import directActive from '../../../../Shared/assets/directActive.png'
import notifyActive from '../../../../Shared/assets/notifyActive.png'
import notifyPassive from '../../../../Shared/assets/notifyPassive.png'
import createActive from '../../../../Shared/assets/createActive.png'
import createPassive from '../../../../Shared/assets/createPassive.png'
import userDefault from '../../../../Shared/assets/userDefault.jpg'
import SidebarNavLink from '../SidebarNavItem/SidebarNavLink'
import SidebarNavBtn from '../SidebarNavItem/SidebarNavBtn'

const SidebarNav = () => {
    const location = useLocation()
    const sidebarSlice = useSelector((state: RootState) => state.sidebar)
    const dispatch = useDispatch()

    console.log(sidebarSlice.activeLink)

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <SidebarNavLink
                route={Routes.Home}
                link={SidebarLinks.Home}
                onClick={() => {
                    dispatch(changeLink(SidebarLinks.Home))
                    dispatch(toggleSidebar(true))
                }}
                imgActive={homeActive}
                imgPassive={homePassive}
                text={'Home'}
            />

            <SidebarNavBtn
                link={SidebarLinks.Search}
                imgActive={searchActive}
                imgPassive={searchPassive}
                text={'Search'}
                onClick={() => {
                    if (sidebarSlice.activeLink !== SidebarLinks.Search) {
                        dispatch(changeLink(SidebarLinks.Search))
                    }
                    if (
                        sidebarSlice.activeLink !== SidebarLinks.Notifications
                    ) {
                        dispatch(toggleSidebar(!sidebarSlice.isOpen))
                    }
                    if (
                        sidebarSlice.activeLink == SidebarLinks.Create &&
                        sidebarSlice.isOpen == false
                    ) {
                        dispatch(toggleSidebar(false))
                    }
                    if (
                        sidebarSlice.activeLink == SidebarLinks.Search &&
                        sidebarSlice.isOpen == false
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
                    }
                }}
            />

            <SidebarNavLink
                route={Routes.Explore}
                link={SidebarLinks.Explore}
                onClick={() => {
                    dispatch(changeLink(SidebarLinks.Explore))
                    dispatch(toggleSidebar(true))
                }}
                imgActive={exploreActive}
                imgPassive={explorePassive}
                text={'Explore'}
            />

            <SidebarNavLink
                route={Routes.Reels}
                link={SidebarLinks.Reels}
                onClick={() => {
                    dispatch(changeLink(SidebarLinks.Reels))
                    dispatch(toggleSidebar(true))
                }}
                imgActive={reelsActive}
                imgPassive={reelsPassive}
                text={'Reels'}
            />

            <SidebarNavLink
                route={Routes.Direct}
                link={SidebarLinks.Direct}
                onClick={() => {
                    dispatch(changeLink(SidebarLinks.Direct))
                    dispatch(toggleSidebar(true))
                }}
                imgActive={directActive}
                imgPassive={directPassive}
                text={'Messages'}
            />

            <SidebarNavBtn
                link={SidebarLinks.Notifications}
                imgActive={notifyActive}
                imgPassive={notifyPassive}
                text={'Notifications'}
                onClick={() => {
                    if (
                        sidebarSlice.activeLink !== SidebarLinks.Notifications
                    ) {
                        dispatch(changeLink(SidebarLinks.Notifications))
                    }
                    if (sidebarSlice.activeLink !== SidebarLinks.Search) {
                        dispatch(toggleSidebar(!sidebarSlice.isOpen))
                    }
                    if (
                        sidebarSlice.activeLink == SidebarLinks.Create &&
                        sidebarSlice.isOpen == false
                    ) {
                        dispatch(toggleSidebar(false))
                    }
                    if (
                        sidebarSlice.activeLink == SidebarLinks.Notifications &&
                        sidebarSlice.isOpen == false
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
                    }
                }}
            />

            <SidebarNavBtn
                link={SidebarLinks.Create}
                imgActive={createActive}
                imgPassive={createPassive}
                text={'Create'}
                onClick={() => {
                    dispatch(changeLink(SidebarLinks.Create))
                }}
            />

            <SidebarNavLink
                route={Routes.Profile}
                link={SidebarLinks.Profile}
                onClick={() => {
                    dispatch(toggleSidebar(true))
                }}
                imgActive={userDefault}
                imgPassive={userDefault}
                text={'Profile'}
            />
        </div>
    )
}

export default SidebarNav
