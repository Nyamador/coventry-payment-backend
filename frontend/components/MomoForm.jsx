import React, {useState} from 'react';
import styled from 'styled-components'
import InputElement from './InputElement'
import Button from './Button'

const MomoFormWrapper = styled.div`
    padding: 20px;
`




const MomoForm = () => {

    const [momoNumber, setMomoNumber] = useState("")

    const handleInputChange = (event) => {
        const number = event.target.value
        
        number.length > 10 ? setMomoNumber(number.slice(0,10)) : setMomoNumber(number)
    }

    return (
        <MomoFormWrapper>
            <form>
                <InputElement value={momoNumber} label="MOBILE NUMBER" placeholder=" eg: 028 234 0943" containerStyle={{marginBottom: '20px'}} changeHandler={handleInputChange}/>
                <Button>Pay GHC 145.00</Button>
            </form>
        </MomoFormWrapper>
    );
}

export default MomoForm;
