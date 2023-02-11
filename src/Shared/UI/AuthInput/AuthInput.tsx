import React from 'react'
import { AuthInputStyled } from './Styled'

type AuthInputProps = {
    placeholder: string
}

const AuthInput = (props: AuthInputProps) => {
    return <AuthInputStyled placeholder={props.placeholder}></AuthInputStyled>
}

export default AuthInput
