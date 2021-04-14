import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.button`
    background-color : #338FF8;
    border: none;
    border-radius: 2px;
    width: 100%;
    padding: 16px;
    color: white;
    min-width: 64px;
    font-weight: bold;
    outline: #d3e7fe;
    box-shadow: 0px 3px 6px  #cbcbcb87;

    &:active {
        transform: scale(0.99);
        outline: #d3e7fe;
    }
`


const Button = ({children, clickHandler}) => {
    return(
        <Wrapper onClick={clickHandler}>
                {children}
        </Wrapper>
    )
}

export default Button