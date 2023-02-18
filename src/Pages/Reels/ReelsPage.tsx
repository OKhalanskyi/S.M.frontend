import React, { useEffect } from 'react'
import { changeLink, SidebarLinks } from '../../Widgets/Sidebar/sidebarSlice'
import { useDispatch } from 'react-redux'

const ReelsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeLink(SidebarLinks.Reels))
    })
    return <div>reels</div>
}

export default ReelsPage
