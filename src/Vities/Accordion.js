import React from 'react'
import { useState } from 'react'
import {FaArrowDown} from '@react-icons/all-files/fa/FaArrowDown'
import {FaArrowRight} from '@react-icons/all-files/fa/FaArrowRight'
import styled from 'styled-components'

const Question = styled.div`
width: 90%;
height: auto;
padding: 1rem;
margin: 1rem;
border-bottom: 1px solid ${props => props.theme.text};
overflow: hidden;
transition: 0.4s;


@media(max-width: 31em){
  margin: 0.25rem;
}
`
const ButtonContain = styled.div`
button{
  background: none;
  transition: all 0.4s ease;

}

svg{
  font-size: ${props => props.theme.lg};
}
`
const Ask = styled.div`
display: flex;
gap: 2rem;
transition: all 0.4s ease;

h6{
  font-size: ${props => props.theme.fontlg};
  text-transform: capitalize;
  font-weight: 500;

  @media(max-width: 64em){
  font-size: ${props => props.theme.fontmd}; 
  }

  @media(max-width: 31em){
    font-size: ${props => props.theme.fontsm}; 
  }
}

@media(max-width: 64em){
  font-size: ${props => props.theme.fontmd};
}

@media(max-width: 31em){
  font-size: ${props => props.theme.fontsm}; 
}
`
const Answer = styled.div`
transition: 0.4s;
margin-top: 10px;
padding: 10px;

h6{
font-weight: 500;
}
`


const Accordion = ({title, info}) => {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  }


  return (
    <Question onClick={handleClick}>
      <Ask>

      <ButtonContain>
        <button>
        {
        show ? <FaArrowDown /> : <FaArrowRight/> 
      }
        </button>
      </ButtonContain>
      <h6>{title}</h6>
      </Ask>
      {
        show && 
      <Answer>
        <h6>{info}</h6>  
      </Answer>
      }
    </Question>
  )
}

export default Accordion