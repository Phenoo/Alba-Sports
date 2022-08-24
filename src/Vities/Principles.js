import React from 'react'
import styled from 'styled-components'
import { FaPeopleCarry } from '@react-icons/all-files/fa/FaPeopleCarry'
import { RiVideoAddLine } from '@react-icons/all-files/ri/RiVideoAddLine'
import { BiBasketball } from '@react-icons/all-files/bi/BiBasketball'
import { GiBasketballJersey } from '@react-icons/all-files/gi/GiBasketballJersey'

const Section = styled.section `
height: auto;
width: 100W;
position: relative;
margin-top: 4rem; 
`

const Container = styled.div `
width: 85%;
margin: 0 auto;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

@media(max-width: 64em){
  width: 90%;
}
`

const Box = styled.div `
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 2rem;

@media(max-width: 64em){
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

@media(max-width: 31em){
  gap: 1.5rem;
}
`
const Item = styled.div `
margin-top: 2rem;
`
const Part = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

svg{
  font-size: 2rem;
  padding: 2rem;
  background-color: ${props => `rgba(${props.theme.textRgba}, 0.95)`};
  border-radius: 5px;
  backdrop-filter: blur(6px);
    color: ${props => props.theme.text};

    @media(max-width: 31em){
      padding: 1rem;
      font-size: 1rem;
    }
}

h4{
  font-size: ${props => props.theme.fontlg};
  text-transform: capitalize;
  margin-top: 10px;

  @media(max-width: 31em){
    font-size: 0.8rem;
  }
}

p{
  text-align: center;
  font-size: ${props => props.theme.fontsm};
  font-weight: 300;
  margin-top: 10px;

  @media(max-width: 600px){
    font-size: 12px;
    }
    
  @media(max-width: 31em){
    font-size: 0.5rem;
    font-weight: 400;
    margin-top: .2rem;
  }
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
`


const Principles = () => {
  return (
    <Section>
      <Container>
        <h4 className='tophead'>our principles</h4>
        <Box>
          <Item>
            <Part >
              <RiVideoAddLine className='text-1' />
            </Part>
            <Part>
              <h4>proficiency</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis ipsa aperiam</p>
            </Part>
          </Item>
          <Item>
          <Part>
            <BiBasketball className='text-2' />
          </Part>
          <Part>
            <h4>participation</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam ratione asperiores.</p>
          </Part>
          </Item>
          <Item>
          <Part>
            <GiBasketballJersey className='text-3'/>
          </Part>
          <Part>
            <h4>lessons</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam ratione asperiores.</p>
          </Part>
          </Item>
          <Item>
          <Part>
            <FaPeopleCarry className='text-4' />
          </Part>
          <Part>
            <h4>team work</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam ratione asperiores.</p>
          </Part>
          </Item>
        </Box>
      </Container>
    </Section>
  )
}

export default Principles