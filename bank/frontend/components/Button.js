import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    padding: 12px;
    padding-left: 14px;
    padding-right: 14px;
    background: black;
    width: 100%;    
    color: white;
    border-radius: 8px;
    border: none;
    outline: none;
    cursor: pointer;

    &:focus{
        transform: scale(0.99)
    }
`

const Button = ({children, onClick, style}) => {
    return (
        <Wrapper onClick={onClick} style={style}>{children}</Wrapper>
    );
}

export default Button;
