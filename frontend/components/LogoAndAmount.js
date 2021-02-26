import React from 'react';
import styled from 'styled-components'
import FlexColumn from './FlexColumn'
import FlexRow from './FlexRow'
import cov_uni from '../icons/coventry_logo.svg'

const Wrapper = styled.div`
    padding: 20px;
    margin-bottom: 20px;
`

const SummarySection = styled(FlexColumn)`
    margin-left: auto;
    justify-content: center;
`
const Currency = styled.span`
    font-size: 10.24px;
    margin-right: 4px;
`

const AmountSection = styled(FlexRow)`
    margin-left: auto;
    align-items: center;
`

const Amount = styled.p`
    font-size: 20px;
    font-weight: bold;
`

const LogoAndAmount = () => {
    return (
        <Wrapper>
            <FlexRow>
                <img src={cov_uni} title="Coventry Logo" height={50}/>
                
                <SummarySection>
                    <AmountSection>
                        <Currency>GHC</Currency>
                        <Amount>145.00</Amount>
                    </AmountSection>
                        <small className="font-s">selanyamador@gmail.com</small>
                </SummarySection>
            </FlexRow>
        </Wrapper>
    );
}

export default LogoAndAmount;
