import React from 'react'
import { AuthButtonTransparentStyled } from './Styled'
import { AuthButtonProps } from './types'

const AuthButtonTransparent = (props: AuthButtonProps) => {
    return (
        <AuthButtonTransparentStyled onClick={props.onClick}>
            {props.children}
        </AuthButtonTransparentStyled>
    )
}

export default AuthButtonTransparent
