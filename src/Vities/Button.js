import React from 'react'
import styled from 'styled-components'

const Click = styled.button`
text-transform: capitalize;
padding: 0.75rem 1.25rem;
background-color: #ff4400;
color: ${props => props.theme.body};
border-radius: 5px;
transition: all 0.2s ease;
font-size: 0.7rem;

&:hover{
background: none;
border: 2px solid ${props => props.theme.text}; 
color:${props => props.theme.text};
}

@media (max-width: 40em){
  padding: 0.5rem 1rem;
  font-size: 0.7rem;
}

`

const ButtonComponent = ({title}) => {
  return (
    <Click>
      {title}
    </Click>
  )
}

export default ButtonComponent