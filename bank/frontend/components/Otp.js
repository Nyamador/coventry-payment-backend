import React,{useState} from 'react';
import styled from 'styled-components'

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
            if(event.target.nextElementSibling != null){
                console.log(event.inputType) 
                setNumbers({...numbers, [event.target.id]: event.target.value})
                event.target.nextElementSibling.focus()
            }else{
                console.log(event.inputType) 
                setNumbers({...numbers, [event.target.id]: event.target.value})
                // event.target.parentElement.firstChild.focus()
            }
    }

    return (
        <Wrapper>
            <OtpInput onChange={() => handleInputChange(event)} id="first" value={numbers.first}/>
            <OtpInput onChange={() => handleInputChange(event)} id="second" value={numbers.second}/>
            <OtpInput onChange={() => handleInputChange(event)} id="third" value={numbers.third}/>
            <OtpInput onChange={() => handleInputChange(event)} id="fourth" value={numbers.fourth}/>
        </Wrapper>
    );
}

export default Otp;
