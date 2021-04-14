import React from 'react';
import styled from 'styled-components';

const ContentCardWrapper = styled.div`
    margin: auto;
    height: 200px;
    width: 500px;
    padding: 20px;  
    background: white;
    border-radius: 8px;
    box-shadow: 10px 10px 10px #ededed;
`


const ContentCard = () => {
    return (
        <ContentCardWrapper>
            <h1>Authenticate Your Purchase</h1>
            <p>Protecting your account is our top priority.Please confirm your account by entering the authorization code sent to ***-***-2282</p>
        </ContentCardWrapper>
    );
}

export default ContentCard;
