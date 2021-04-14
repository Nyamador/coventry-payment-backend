import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    padding: 12px;
    padding-left: 14px;
    padding-right: 14px;
    background: blue;
    color: white;
    border-radius: 8px;
    border: none;
    outline: none;
`

const Button = ({text, onClick, style}) => {
    return (
        <Wrapper onClick={onClick} style={style}>{text}</Wrapper>
    );
}

export default Button;
