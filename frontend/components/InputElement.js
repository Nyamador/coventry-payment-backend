import React from 'react';
import styled from 'styled-components'

import FlexColumn from './FlexColumn'

const InputWrapper = styled(FlexColumn)`
    border: 1px solid #E1E1E1;
    border-radius: 2px solid;
    padding: 8px;
`

const Label = styled.label`
    color: #CBCBCB;
    margin-bottom: 4px;
`

const Input = styled.input`
    color: #CBCBCB;
    outline: none;
    border: none;
`

const InputElement = ({type, value, required, placeholder, id, label, containerStyle, changeHandler}) => {
    return (
        <InputWrapper style={containerStyle}>
            <Label htmlFor={id} className="font-s">{label}</Label>
            <Input type={type} value={value} required={!required ? true : required} placeholder={placeholder} id={id} onChange={(event) => changeHandler(event)}/>
        </InputWrapper>
    );
}

export default InputElement;