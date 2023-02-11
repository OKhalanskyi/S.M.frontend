import styled from 'styled-components'

export const AuthInputStyled = styled.input`
    padding: 8px 0 8px 8px;
    width: 268px;
    justify-self: center;
    height: 36px;
    border: 0.5px solid lightgray;
    border-radius: 3px;
    background-color: rgb(250, 250, 250);
    align-items: center;
    &::placeholder {
        font-weight: 400;
        font-size: 12px;
        color: rgb(142, 142, 142);
        padding-bottom: 8px;
    }
`
