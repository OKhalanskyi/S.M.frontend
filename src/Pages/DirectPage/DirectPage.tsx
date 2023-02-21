import React, { useEffect } from 'react'
import { changeLink, SidebarLinks } from '../../Widgets/Sidebar/sidebarSlice'
import { useDispatch } from 'react-redux'

const DirectPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeLink(SidebarLinks.Direct))
    })

    return <div>direct</div>
}

export default DirectPage
