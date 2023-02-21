import React from 'react'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../App/providers/withRedux'

const SearchPanel = () => {
    const sidebarSlice = useSelector((state: RootState) => state.sidebar)

    return (
        <div
            className={styles.searchPanel}
            style={{
                width: sidebarSlice.searchPanel ? '400px' : '0',
                borderRight: sidebarSlice.searchPanel
                    ? '1px solid lightgray'
                    : '0',
            }}
        >
            <div
                style={{ display: sidebarSlice.searchPanel ? 'flex' : 'none' }}
            >
                <div>Search</div>
                <div>inputs</div>
            </div>
        </div>
    )
}

export default SearchPanel
