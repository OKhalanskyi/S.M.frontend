import React, { ReactNode } from 'react'
import { AuthButtonStyled } from './Styled'

type AuthButtonProps = {
    disabled: boolean
    children: ReactNode
    onClick: () => void
}

const AuthButton = (props: AuthButtonProps) => {
    return (
        <AuthButtonStyled disabled={props.disabled} onClick={props.onClick}>
            {props.children}
        </AuthButtonStyled>
    )
}

export default AuthButton
