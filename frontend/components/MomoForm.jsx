import React from 'react';
import styled from 'styled-components'
import InputElement from './InputElement'
import Button from './Button'

const MomoFormWrapper = styled.div`
    padding: 20px;
`


const MomoForm = () => {
    return (
        <MomoFormWrapper>
            <form>
                <InputElement label="MOBILE NUMBER" containerStyle={{marginBottom: '20px'}}/>
                <Button>Pay GHC 145.00</Button>
            </form>
        </MomoFormWrapper>
    );
}

export default MomoForm;
