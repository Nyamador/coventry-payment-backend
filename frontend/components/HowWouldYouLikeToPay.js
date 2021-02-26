import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 20px;
`
const Divider = styled.div`
    margin-top: 10px;
    width: 40%;
    border: 2px solid #338FF8;
`

const HowWouldYouLikeToPay = () => {
    return (
        <Wrapper>
                <p className="font-xl">How would <br/> you like to pay?</p>
                <Divider/>
        </Wrapper>
    );
}

export default HowWouldYouLikeToPay;
