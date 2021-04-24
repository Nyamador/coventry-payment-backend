import React,{useState} from 'react';
import styled from 'styled-components'
import Button from './Button'

const Input =  styled.input`
    text-align: center;
    width: 20px;
    height: 30px;
    padding: 12px;
    font-size: 20px;
    border: none;
    margin-right: 10px;
    border-bottom: 1px solid gainsboro;
    
    &:focus{
        outline: none
    }
`

const OtpInput = ({name, value, onChange, id}) => {
    return(
        <Input type="text" required={true} id={id} maxLength="1" name={name} value={value} onChange={onChange}/>
    )
}


const Wrapper = styled.div`
    display: flex;
    justify-content : center;
`


const Otp = () => {

    const [numbers, setNumbers] = useState({
        "first": "",
        "second": "",
        "third": "",
        "fourth": ""
    })

    const handleInputChange = event => {
            if(event.target.nextElementSibling != null && event.inputType != 'deleteContentBackward'){
                console.log(event.inputType) 
                setNumbers({...numbers, [event.target.id]: event.target.value})
                event.target.nextElementSibling.focus()
            }else{
                console.log(event.inputType) 
                setNumbers({...numbers, [event.target.id]: event.target.value})
                // event.target.parentElement.firstChild.focus()
            }

           if(event.inputType === 'deleteContentBackward' && event.target.previousElementSibling != null){
                   if(event.target != event.target.parentElement.firstChild){
                       event.target.previousElementSibling.focus()
                   }
                // console.log(event)
           }
    }

    return (
        <>
        <div>
            <h2>Purchase Authentication</h2>
            <p style={{'textAlign': 'center'}}>Please enter the 4 digit Otp sent to your phone.</p>
        </div>

        <Wrapper>
            <OtpInput onChange={() => handleInputChange(event)} id="first" value={numbers.first}/>
            <OtpInput onChange={() => handleInputChange(event)} id="second" value={numbers.second}/>
            <OtpInput onChange={() => handleInputChange(event)} id="third" value={numbers.third}/>
            <OtpInput onChange={() => handleInputChange(event)} id="fourth" value={numbers.fourth}/>

        </Wrapper>
        <div style={{'display': 'flex', 'padding': 10}}>
            <Button style={{'marginLeft': 'auto', 'marginTop': 10}}>
                Verify
            </Button>
        </div>

        </>
    );
}

export default Otp;
