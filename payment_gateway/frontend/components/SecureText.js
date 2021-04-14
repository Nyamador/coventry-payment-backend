import React from 'react'
import styled from 'styled-components'
import lock from '../icons/lock.svg'



const SecureTextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 10.24px;
    margin-bottom: 20px;
    padding: 20px;
`
const Text = styled.small`
    color: #CBCBCB;
`
const ImageWrapper = styled.div`
    margin-right: 4px;
`
const CloseButton = styled.button`
    outline: none;
    background: none;
    border: none;
    color: red;
    font-size: 10.24px;
    margin-left: auto;
    cursor: pointer;
`

const SecureText = () => {
    return(
        <>
        <SecureTextWrapper>
            <ImageWrapper>
                <img src={lock} title="lock"/>
            </ImageWrapper>
            <Text>Secured by CoventryPay</Text>

            <CloseButton>
                Close
            </CloseButton>
        </SecureTextWrapper>
        </>
    )
}

export default SecureText;