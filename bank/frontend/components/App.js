import React from 'react';
import styled from 'styled-components';
import ContentCard from './ContentCard'


const AppContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    height: 100vh;
    overflow: hidden;
    display: flex;
`

const App = () => {
    return (
        <AppContainer>
            <ContentCard/>
        </AppContainer>
    );
}

export default App;
