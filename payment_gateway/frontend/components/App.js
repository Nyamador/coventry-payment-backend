import React from 'react'
import PaymentContainer from './PaymentContainer'
import styled from 'styled-components'


const AppWrapper = styled.main`
    width: 100%;
    background-color: #CBCBCB;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`


const App = () => {
    return (
        <AppWrapper>
            <PaymentContainer/>
    </AppWrapper>
    )
}

export default App;