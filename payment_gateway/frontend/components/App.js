import React from 'react'
import PaymentContainer from './PaymentContainer'
import styled from 'styled-components'
import Pattern from '../icons/curved-pattern-blue.png'


const AppWrapper = styled.main`
    width: 100%;
    background-color: #eaf6fc;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-image: url(${props => props.img});
    background-position: 0 50px;
    background-rpeat: repeat-x;
`


const App = () => {
    React.useEffect(() => {
        document.title = "Payment Gateway"
    }, [])
    return (
    <AppWrapper img={Pattern}>
            <PaymentContainer/>
    </AppWrapper>
    )
}

export default App;