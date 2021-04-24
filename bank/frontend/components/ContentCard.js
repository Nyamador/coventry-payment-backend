import React from 'react';
import styled from 'styled-components';
import Button from './Button'
import Otp from './Otp'
import bank from '../icons/bank.svg'
import mastercard from '../icons/mastercard.jpg'
import loading from '../icons/loading.svg'

const ContentCardWrapper = styled.div`
    margin: auto;
    height: auto;
    width: 500px;
    padding: 24px;  
    background: white;
    border-radius: 8px;
`

const LogoWrapper = styled.section`
    display: flex;
`

const Heading = styled.h1`
    font-size: 25px;
`

const Table = styled.div`
    margin-bottom: 10px;
`

const TableItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 0.3px solid gainsboro;
    
    & > p{
        margin-left: auto;
    }
`

const ContentCard = () => {

    const [renderOtpForm , setRenderOtpForm] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)

    const fetchData = () => {
            fetch('http://localhost:8000/api/v1/send_otp');
            console.log(response.json())
    }

    const handleButtonClick = () => {
        renderOtpForm ? setRenderOtpForm(false) : setRenderOtpForm(true)
        isLoading ? setIsLoading(false): setIsLoading(true)
    }


    return     renderOtpForm  ? <ContentCardWrapper><Otp/></ContentCardWrapper>: 
       <ContentCardWrapper>
            <LogoWrapper>
                    <div>
                        <img src={bank}/>
                    </div>
                    <div style={{marginLeft: 'auto'}}>
                        <img src={mastercard} height="30px"/>
                    </div>
           </LogoWrapper>

            <Heading>Purchase Authentication</Heading>
            <p>We'll send you a text message to your registered mobile number ending 2359.</p>

            <Table>
                <TableItem>
                    <span>Amount</span>
                    <p>GHC 200</p>
                </TableItem>

                <TableItem>
                    <span>Merchant Name</span>
                    <p>Coventry Pay</p>
                </TableItem>

                <TableItem>
                    <span>Card Number</span>
                    <p>Ending 907</p>
                </TableItem>
            </Table>


            <Button onClick={() => handleButtonClick()}>
               {isLoading ? <img src={loading} height="30px"/> : "Send Otp"}
            </Button>
            
         </ContentCardWrapper>
        
}

export default ContentCard;
