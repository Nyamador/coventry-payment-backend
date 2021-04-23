import React from 'react'
import styled from 'styled-components'
import lock from '../icons/lock.svg'
import close from '../icons/close.svg'

  


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
    margin-left: auto;
    cursor: pointer;
    height: 20px;
    transition: all 1s;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    text-align: center;

    &:hover{
        background: red;
    }
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
                <img src={close} title="close"/>
            </CloseButton>
        </SecureTextWrapper>
        </>
    )
}

export default SecureText;