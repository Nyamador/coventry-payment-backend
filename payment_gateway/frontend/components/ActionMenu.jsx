import React from 'react';
import styled from 'styled-components'
import FlexColumn from './FlexColumn'
import rotate from '../icons/rotate2.svg'
import cancel from '../icons/cancel.svg'

const ActionMenuWrapper = styled(FlexColumn)`
    border-top: 1px solid #E1E1E1;
    background-color: #f9f9f9;
    height: 100px;
    margin-top: auto;
    border-radius: 0 0 4px 4px;
`

const ImageWrapper = styled.span`
    margin-right: 10px;
`

const ActionMenuButton = styled.button`
    height: 50px;
    outline: transparent;
    border: none;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-top : ${props => props.cancel ? "1px solid #E1E1E1" : ""};

    $:active{
        outline: transparent;
    }
`

const ActionMenu = ({onPaymentMethodChange}) => {

    const handleCancelClick = () => {
        const action = confirm("Do you want to cancel?")
        action ? window.location.reload() : console.log("Not cancelled")
    }
    return (
        <ActionMenuWrapper onClick={() => onPaymentMethodChange()}>
            <ActionMenuButton>
                <ImageWrapper>
                    <img src={rotate} title="rotate"/>
                </ImageWrapper>
                Change Payment Method
            </ActionMenuButton>


            <ActionMenuButton cancel={true} onClick={() => handleCancelClick()}>
                <ImageWrapper>
                    <img src={cancel} title="cancel"/>
                </ImageWrapper>
                Cancel Payment
            </ActionMenuButton>
        </ActionMenuWrapper>
    );
}

export default ActionMenu;
