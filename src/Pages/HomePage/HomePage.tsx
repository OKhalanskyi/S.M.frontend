import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeLink, SidebarLinks } from '../../Widgets/Sidebar/sidebarSlice'

const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeLink(SidebarLinks.Home))
    })
    return <div>main</div>
}

export default HomePage
