import React, {useState} from 'react'
import styled from 'styled-components';


import SecureText from './SecureText'
import LogoAndAmount from './LogoAndAmount'
import HowWouldYouLikeToPay from './HowWouldYouLikeToPay'
import FlexColumn from './FlexColumn'
import CardForm from './CardForm'


import card from '../icons/credit-card.svg'
import phone from '../icons/phone.svg'


const PaymentWrapper = styled(FlexColumn)`
    width: 30%;
    background-color: white;
    margin: auto;
    min-height: 95%;
    border-radius: 4px;
`

const Header = styled.div`
    // padding: 12px;
`

const PaymentMethodSelectionWrapper = styled(FlexColumn)`
    border-top: 1px solid #E1E1E1;
    background-color: #f9f9f9;
    height: 100px;
    margin-top: auto;
    border-radius: 0 0 4px 4px;
`

const PaymentMethodButton = styled.button`
    height: 50px;
    outline: transparent;
    border: none;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-top : ${props => props.momo ? "1px solid #E1E1E1" : ""};

    $:active{
        outline: transparent;
    }
`

const ImageWrapper = styled.span`
    margin-right: 10px;
`


const PaymentContainer = () => {
    const [isMomoActive, setIsMomoActive] = useState(false)
    const [isCardActive, setIsCardActive] = useState(false)
    const [showHowToPay, setShowHowToPay] = useState(true)


    return (
        <PaymentWrapper>
            <Header>
                <SecureText/>
            </Header>
            <LogoAndAmount/>
            
            {isMomoActive && <p>Momo</p>}

            {isCardActive && <CardForm/>}
        
           {showHowToPay && <HowWouldYouLikeToPay/>}
            

            <PaymentMethodSelectionWrapper>
                <PaymentMethodButton onClick={
                    () => {
                        setShowHowToPay(false)
                        setIsMomoActive(false)
                        setIsCardActive(true)
                    }}>
                    <ImageWrapper>
                        <img src={card} title="card"/>
                    </ImageWrapper>
                    <p>Pay With <strong>Card</strong></p>
                </PaymentMethodButton>

                <PaymentMethodButton momo={true} onClick={
                    () => {
                        setShowHowToPay(false)
                        setIsCardActive(false)
                        setIsMomoActive(true)
                    }}>
                    <ImageWrapper>
                    <img src={phone} title="momo"/>
                    </ImageWrapper>
                    <p>Pay With <strong>MoMo</strong> </p>
                </PaymentMethodButton>
            </PaymentMethodSelectionWrapper>

        </PaymentWrapper>
    )
}

export default PaymentContainer