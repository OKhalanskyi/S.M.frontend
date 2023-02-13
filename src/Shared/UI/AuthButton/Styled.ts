import styled from 'styled-components'

export const AuthButtonStyled = styled.button`
    width: 268px;
    background-color: ${(props) =>
        props.disabled ? 'rgb(0,149,246)' : 'rgb(0,149,246)'};
    border-radius: 8px;
    height: 34px;
    justify-content: center;
    align-items: center;
    justify-self: center;
    align-self: center;
    color: white;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    &:hover {
        background-color: ${(props) => (props.disabled ? '' : '#1877F2')};
    }
`

export const AuthButtonTransparentStyled = styled.button`
    width: 268px;
    background-color: transparent;
    height: 34px;
    justify-content: center;
    align-items: center;
    justify-self: center;
    align-self: center;
    color: #385185;
    font-size: 14px;
    font-weight: 600;
    display: flex;
`
