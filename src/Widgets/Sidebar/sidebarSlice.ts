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
    searchPanel: boolean
    notifyPanel: boolean
}

const initialState: SidebarState = {
    isOpen: true,
    activeLink: SidebarLinks.Home,
    searchPanel: false,
    notifyPanel: false,
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
        toggleSearchPanel: (state, action: PayloadAction<boolean>) => {
            state.searchPanel = action.payload
        },
        toggleNotifyPanel: (state, action: PayloadAction<boolean>) => {
            state.notifyPanel = action.payload
        },
    },
})

export const {
    toggleSidebar,
    changeLink,
    toggleSearchPanel,
    toggleNotifyPanel,
} = sidebarSlice.actions
export default sidebarSlice.reducer
