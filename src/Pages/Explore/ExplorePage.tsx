import React, { useEffect } from 'react'
import { changeLink, SidebarLinks } from '../../Widgets/Sidebar/sidebarSlice'
import { useDispatch } from 'react-redux'

const ExplorePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeLink(SidebarLinks.Explore))
    })
    return <div>explore</div>
}

export default ExplorePage
