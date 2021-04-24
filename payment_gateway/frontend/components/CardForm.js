import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import InputElement, {CardInputElement} from './InputElement'
import { isValid, isExpirationDateValid, isSecurityCodeValid, getCreditCardNameByNumber } from 'creditcard.js';
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
    const [cardIssuer, setCardIssuer] = useState(getCreditCardNameByNumber(cardNumber))
    const [expiryHasError, setExpiryHasError] = useState(false)
    const [cvv, setCvv] = useState("")
    const [cvvIsValid, setCvvIsValid] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(async () => {
        const response = await fetch(`http://localhost:8000/api/v1/links/${window.location.pathname.split('/')[2]}/`, {
            method: 'GET',
            headers:{
                'Authorization': 'Token 11fd430bb58258c46f656613074376c8f17dfbdc'
            }
        })

        if(!response.ok){
            const message = "An error has occured"
            throw new Error(message)
        }
        const data = response.json()
        console.log(data.data)

    }, [])

    const cc_format = (value) => {
        let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        let matches = v.match(/\d{4,16}/g);
        let match = matches && matches[0] || ''
        let parts = []
        for (let i=0, len=match.length; i<len; i+=4) {
          parts.push(match.substring(i, i+4))
        }
        if (parts.length) {
          return parts.join(' ')
        } else {
          return value
        }
      }
      
    const handleCreditCardInputChange = (event) => { 
        const ccNumber = event.target.value

        ccNumber.length > 16 ? () => setCardNumber(cc_format(ccNumber.slice(0,19))) : setCardNumber(cc_format(ccNumber))

        // setCardIssuer(getCreditCardNameByNumber(ccNumber))
        // if ( ccNumber.charAt(0) == 4  ) {
        //     setCardIssuer("visacard")
        // }else if(ccNumber.charAt(0) == 5){
        //     setCardIssuer("mastercard")
        // }else{
        //     setCardIssuer(" ")
        // }

        // console.log(isValid(ccNumber))
        // console.log(getCreditCardNameByNumber(ccNumber))
        //Autoformatting
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
        console.log("sdS", isSecurityCodeValid(cardNumber, cvvvalue))
    }

    return (
        <CardFormWrapper>
            <form onSubmit={e => e.preventDefault()}>
                <CardInputElement type="text" value={cardNumber} issuer_logo={cardIssuer} label="CARD NUMBER" placeholder="4242 4242 4242 4242" id="card_number" containerStyle={{marginBottom: '10px'}} changeHandler={handleCreditCardInputChange}/>
                

                <MonthCvvWrapper>
                    <InputElement type="text" value={expiryDate} hasError={expiryHasError} label="EXPIRY DATE" placeholder="MM / YY" id="card_number" containerStyle={{ width: '50%', borderRight: '0px'}} changeHandler={handleExpiryInputChange}/>
                    <InputElement type="text" value={cvv} label="CVV" placeholder="123" id="card_number" containerStyle={{ width: '50%'}} changeHandler={handleCVVInputChange}/>
                </MonthCvvWrapper>
                <Button>Pay GHC 145.00</Button>
            </form>
        </CardFormWrapper>
    );
}

export default CardForm;
