import React, { useEffect } from 'react'
import { changeLink, SidebarLinks } from '../../Widgets/Sidebar/sidebarSlice'
import { useDispatch } from 'react-redux'

const ProfilePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeLink(SidebarLinks.Profile))
    })
    return <div>profile</div>
}

export default ProfilePage
