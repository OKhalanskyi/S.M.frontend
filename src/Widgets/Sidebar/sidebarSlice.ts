import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum SidebarLinks {
    Home = 'Home',
    Search = 'Search',
    Explore = 'Explore',
    Reels = 'Reels',
    Direct = 'Direct',
    Notifications = 'Notifications',
    Create = 'Create',
    Profile = 'Profile',
}

export interface SidebarState {
    isOpen: boolean
    activeLink: SidebarLinks
}

const initialState: SidebarState = {
    isOpen: true,
    activeLink: SidebarLinks.Home,
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload
        },
        changeLink: (state, action: PayloadAction<SidebarLinks>) => {
            state.activeLink = action.payload
        },
    },
})

export const { toggleSidebar, changeLink } = sidebarSlice.actions
export default sidebarSlice.reducer
