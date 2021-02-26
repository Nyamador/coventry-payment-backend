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
    const [cvv, setCvv] = useState("")

    const handleCreditCardInputChange = (event) => {
        setCardNumber(event.target.value)
    }

    const handleExpiryInputChange = (event) => {
        const expiryDate = event.target.value.substring(0,5)
        const month = expiryDate.substring(0,2)
        const year = expiryDate.slice(2,4)
        if (expiryDate.length === 4){
            setExpiryDate(`${month}/${year}`)
        }else{
            setExpiryDate(expiryDate)
        }
    }

    const handleCVVInputChange = (event) => {
        const cvv = event.target.value
        cvv.length > 3 ? setCvv(cvv.slice(0,3)) : setCvv(cvv)
    }

    return (
        <CardFormWrapper>
            <form onSubmit={e => e.preventDefault()}>
                <InputElement type="text" label="CARD NUMBER" placeholder="4242 4242 4242 4242" id="card_number" containerStyle={{borderBottom: '0px'}} changeHandler={handleCreditCardInputChange}/>

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
