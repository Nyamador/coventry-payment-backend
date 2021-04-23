import React from 'react';
import styled from 'styled-components'

import FlexColumn from './FlexColumn'
import FlexRow from './FlexRow'

import visacard from '../icons/vs.svg'
import mastercard from '../icons/ms.svg'

const InputWrapper = styled(FlexColumn)`
    border: ${props => props.error ? "1px solid #e60023" : "1px solid #E1E1E1"};
    border-radius: 2px;
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

const InputElement = ({type, value, required, placeholder, id, label, containerStyle, changeHandler, hasError}) => {

    return (
        <InputWrapper style={containerStyle} error={hasError}>
            <Label htmlFor={id} className="font-s">{label}</Label>
            <Input  type={type} value={value} required={!required ? true : required} placeholder={placeholder} id={id} onChange={(event) => changeHandler(event)}/>
        </InputWrapper>
    );
}

export default InputElement;


export const CardInputElement = ({type, value, required, placeholder, id, label, containerStyle, changeHandler, hasError, issuer_logo}) => {
    
    const get_issuer_logo = (issuer_name) => {
        if(issuer_name === "mastercard"){
            return mastercard
        }else if(issuer_name === "visacard"){
            return visacard
        }
    }

    return (
        <InputWrapper style={containerStyle} error={hasError}>
            <Label htmlFor={id} className="font-s">{label}</Label>
            <FlexRow>
                <Input style={{width: '95%'}} type={type} value={value} required={!required ? true : required} placeholder={placeholder} id={id} onChange={(event) => changeHandler(event)}/>
                <img src={get_issuer_logo(issuer_logo)} height="20px"/>
            </FlexRow>
        </InputWrapper>
    );
}
