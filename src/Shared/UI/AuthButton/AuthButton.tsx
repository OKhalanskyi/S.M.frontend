import React from 'react'
import { AuthButtonStyled } from './Styled'
import { AuthButtonProps } from './types'

const AuthButton = (props: AuthButtonProps) => {
    return (
        <AuthButtonStyled disabled={props.disabled} onClick={props.onClick}>
            {props.children}
        </AuthButtonStyled>
    )
}

export default AuthButton
