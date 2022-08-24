import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ButtonComponent from '../Button'

import Video from './Video'
import { dark } from '../../styles/Theme'

const Section = styled.section`
width: 100vw;
background-color: ${props => props.theme.text};
color:  ${props => props.theme.body};
position: relative;
margin-top: 6rem;

`
const MainContainer = styled.div`
width: 85%;
margin: 0 auto;
padding: 6rem 3rem;

@media(max-width: 64em){
  padding: 1rem;
  width: 90%;
}
`
const Container = styled.div`
display: grid;
grid-template-columns: 50% 50%;
place-items: center;
gap: 2rem;

@media(max-width: 64em){
  grid-template-columns: 100%;
}

`
const Part = styled.div`
img{
  width: 100%;
  height: 350px;
}

  p{
  font-size: ${props => props.theme.fontsm};
  margin: 10px 0 1.3rem;

  @media(max-width: 600px){
    font-size: 12px;
  }

  @media(max-width: 28em){
    font-size: 0.6rem;
  }

}

button{
  color: #ffe4e1;
}
`

const Details = () => {
  return (
    <Section id='about'>
      <MainContainer>
      <Container>
          <Video />
        <Part>
          <h2 className='tophead'>
            play every  game like a champion
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reiciendis ipsum repudiandae, dicta iure deserunt sint molestias vitae aut et veniam aperiam numquam beatae laborum quae dolore neque expedita harum voluptas iste suscipit maiores exercitationem doloremque? Nihil quod rem porro</p>
          <ThemeProvider theme={dark}>
          <ButtonComponent title='know more' />
          </ThemeProvider>
        </Part>
      </Container>
      </MainContainer>
    </Section>
  )
}

export default Details