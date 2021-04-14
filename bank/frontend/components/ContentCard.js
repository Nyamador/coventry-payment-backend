import React from 'react';
import styled from 'styled-components';
import Button from './Button'
import Otp from './Otp'

const ContentCardWrapper = styled.div`
    margin: auto;
    height: auto;
    width: 500px;
    padding: 20px;  
    background: white;
    border-radius: 8px;
    box-shadow: 10px 10px 10px #ededed;
`

const Heading = styled.h1`
    text-align: center;
    font-size: 25px;
`


const ContentCard = () => {
    return (
        <ContentCardWrapper>
            <Heading>Authenticate Your Purchase</Heading>
            <p style={{'textAlign': 'center'}}>Protecting your account is our top priority.Please confirm your account by entering the authorization code sent to <strong>***-***-2282</strong></p>

            <Otp/>

            <div style={{'display': 'flex', 'padding': 10}}>
                <Button text="Verify" style={{'marginLeft': 'auto', 'marginTop': 10}}/>
            </div>
        </ContentCardWrapper>
    );
}

export default ContentCard;
