import React, {useState} from 'react';
import styled from 'styled-components'
import InputElement from './InputElement'
import Button from './Button'
import FlexRow from './FlexRow'

const CardFormWrapper = styled.div`
    padding: 20px;
`

const MonthCvvWrapper = styled(FlexRow)`
    margin-bottom: 10px;
`

const CardForm = () => {

    const [cardNumber, setCardNumber] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [expiryHasError, setExpiryHasError] = useState(false)
    const [cvv, setCvv] = useState("")

    const handleCreditCardInputChange = (event) => { 
        const ccNumber = event.target.value
        // ccNumber.length > 16 ? setCardNumber(ccNumber.slice(0,16)) : setCardNumber(ccNumber)

        //Autoformatting
        // if(!ccNumber.includes(" ")){
            ccNumber.length > 4 ? setCardNumber(`${ccNumber.slice(0,4)} ${ccNumber.slice(4,8)} ${ccNumber.slice(8,12)} ${ccNumber.slice(12,16)}`)  : setCardNumber(ccNumber.slice(0,19))
        // }else{
            // setCardNumber(ccNumber.slice(0,19))
        // }
    }

    const handleExpiryInputChange = (event) => {
        const expiry = event.target.value

        // month validation
        expiry.slice(0,2) > 12 ? setExpiryHasError(true) : setExpiryHasError(false)

        //Year Validation
        const currentYear = new Date().getFullYear().toString().slice(2,4)
        expiry.slice(3,5) < currentYear.slice(2,4) ? setExpiryHasError(true) : setExpiryHasError(false)
        
        // Auto-formatting
        if(!expiryDate.includes('/')){
            expiry.length > 3 ? setExpiryDate(`${expiry.slice(0,2)}/${expiry.slice(2,4)}`): setExpiryDate(expiry)
        }else{
              setExpiryDate(expiry.slice(0,5))  
        }
    }

    const handleCVVInputChange = (event) => {
        const cvvvalue = event.target.value
        cvvvalue.length > 3 ? setCvv(cvvvalue.slice(0,3)) : setCvv(cvvvalue)
    }

    return (
        <CardFormWrapper>
            <form onSubmit={e => e.preventDefault()}>
                <InputElement type="text" value={cardNumber} label="CARD NUMBER" placeholder="4242 4242 4242 4242" id="card_number" containerStyle={{borderBottom: '0px'}} changeHandler={handleCreditCardInputChange}/>

                <MonthCvvWrapper>
                    <InputElement type="text" value={expiryDate} label="EXPIRY DATE" placeholder="MM / YY" id="card_number" containerStyle={{ width: '50%', borderRight: '0px'}} changeHandler={handleExpiryInputChange}/>
                    <InputElement type="text" value={cvv} label="CVV" placeholder="123" id="card_number" containerStyle={{ width: '50%'}} changeHandler={handleCVVInputChange}/>
                </MonthCvvWrapper>
                <Button>Pay GHC 145.00</Button>
            </form>
        </CardFormWrapper>
    );
}

export default CardForm;
