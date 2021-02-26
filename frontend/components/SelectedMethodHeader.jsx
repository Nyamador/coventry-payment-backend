import React from 'react';
import styled from 'styled-components'
import FlexRow from './FlexRow'
import card from '../icons/credit-card.svg'

const Wrapper = styled(FlexRow)`
    height: 30px;
    border-bottom : "1px solid #E1E1E1";
    padding: 12px;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
`

const ImageWrapper = styled.span`
    margin-right: 10px;
`

const SelectedMethodHeader = ({title, img_url}) => {
    return (
        <Wrapper className="font-s">
            <ImageWrapper>
                <img src={img_url} title="card"/>
            </ImageWrapper>
                    <p>Paying with {title}</p>
        </Wrapper>
    );
}

export default SelectedMethodHeader;
