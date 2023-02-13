import { ReactNode } from 'react'

export type AuthButtonProps = {
    disabled?: boolean
    children: ReactNode
    onClick: () => void
}
