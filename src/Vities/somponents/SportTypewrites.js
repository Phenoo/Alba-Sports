import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import ButtonComponent from '../Button';


const Title = styled.h2 `
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
max-width: 70%;
color: ${props => props.theme.text};
align-self: flex-start;

span{
  text-transform: uppercase;
}
.text-1{
  color: blue;
}
.text-2{
  color: red;
}
.text-3{
  color: orange;
}
.text-4{
  color: purple;
}
@media (max-width: 70em){
  font-size: ${props => props.theme.fontxl};
}
@media (max-width: 25em){
  font-size: ${props => props.theme.fontlg};
}

@media (max-width: 40em){
  width: 90%;
}
`

const SubTitle = styled.h6 `
font-size: ${props => props.theme.fontmd};
text-transform: capitalize;
color: ${props => (`rgba${props.theme.textRgba}, 0.6`)};
font-weight: 400;
margin-top: 1rem;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 48em){
font-size: ${props => props.theme.fontsm};
}

@media (max-width: 24em){
  font-size: 0.7rem;
}

@media (max-width: 40em){
  width: 90%;
}
`


const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;

button{
  
}

@media(max-width: 48em){
  button {
  margin: 0 auto;
  }
}
`



const SportTypewrites = () => {
  return (
    <>
      <Title>
      be the 
        <Typewriter options={{
          autoStart: true,
          loop: true
        }} onInit={(typewriter) => {
          typewriter.typeString(`<span class="text-1">BasketBall.</span>`)
          .pauseFor(2500)
          .deleteAll()
          .typeString(`<span class="text-2">Boxing.</span>`)
          .pauseFor(2500)
          .deleteAll()
          .typeString(`<span class="text-4">Skating.</span>`)
          .pauseFor(2500)
          .deleteAll()
          .typeString(`<span class="text-3">Football.</span>`)
          .pauseFor(2500)
          .deleteAll()
          .start()
        }}
        
        />
      star and shine
      </Title>
      <SubTitle>
        Had deep stars beginning whose days abundantly divide don't wingled stars every green saying bearing years.
      </SubTitle>
      <ButtonContainer>
        <Link to="/signup">
          <ButtonComponent title='join now' />
        </Link>
      </ButtonContainer>
    </>
  )
}

export default SportTypewrites