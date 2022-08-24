import React from 'react'
import styled from 'styled-components'

import Img1 from '../../sports/undraw_junior_soccer.svg'
import Img2 from '../../sports/undrawbasket.svg'
import Img3 from '../../sports/undraw_grand_slam.svg'
import ButtonComponent from '../Button'

const Section = styled.section`
width: 100vw;
position: relative;
margin-top: 6rem;
`
const MainContainer = styled.div`
width: 85%;
margin: 0 auto;
display: flex;
flex-direction: column;

h2{
  text-align: center;
}

@media(max-width: 64em){
  width: 90%;
}
`
const Container = styled.div`
margin-top: 3rem;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
place-items: center;

@media(max-width: 800px){
  grid-template-columns: repeat(2, 1fr);
}
@media(max-width: 550px){
  width: 95%;
  margin: 0 auto;
  grid-template-columns: 100%;
  margin-top: 1.5rem;
}
`
const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
height: auto;
padding: 1rem;
border-radius: 5px;
background-color: gray;

@media(max-width: 500px){
  height: auto;
}
`
const Part = styled.div`
  height: 50%;
  width: 100%;

  img {
    display: flex;
    align-items: center
    magrin:0 auto;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;

  @media(max-width: 500px){
    width: 70%;
    object-fit: contain;
    margin: 0 auto;
  }

  }
`
const Title = styled.h4`
text-transform: uppercase;
font-size: ${props => props.theme.fontxl};
margin-top: 2rem;

@media(max-width: 600px){
  font-size: ${props => props.theme.fontlg};
  margin-top: 1rem;
}
`
const Text = styled.p`
font-size: ${props => props.theme.fontsm};
margin: 5px 0 1rem;

@media(max-width: 800px){
font-size: 12px;
}
`
const Bottom = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 6rem;
padding: 3rem;

@media(max-width: 64em){
font-size: ${props => props.theme.fontsm};
  padding: 10px;
}

p{
  font-size: 0.75rem;
  @media(max-width: 31em){
    font-size: 0.6rem;
    }
}
`

const Line = styled.div`
height: 3px;
width: 46rem;
background-color: ${props => props.theme.text};

@media(max-width: 64em){
  display: none;
}
`



const Categories = () => {
  return (
    <Section id="category">
      <MainContainer>
      <h2 className='tophead'>
        our sports categories
      </h2>
      <Container>
        <Box id='box1'>
          <Part>
            <img src={Img1} alt="football" />
          </Part>
          <Part>
            <Title>football</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam mollitia placeat accusamus itaque debitis veniam, corrupti, totam labore officia magni porro doloribus soluta numquam</Text>
            <ButtonComponent title='know more' />
          </Part>
        </Box>
        <Box id='box2'>
          <Part>
            <img src={Img2} alt="sports" />
          </Part>
          <Part>
            <Title>basketball</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam mollitia placeat accusamus itaque debitis veniam, corrupti, totam labore officia magni porro doloribus soluta numquam</Text>
            <ButtonComponent title='know more' />
          </Part>
        </Box>
        <Box id='box3'>
          <Part>
            <img src={Img3} alt="sports" />
          </Part>
          <Part>
            <Title>tennis</Title>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam mollitia placeat accusamus itaque debitis veniam, corrupti, totam labore officia magni porro doloribus soluta numquam</Text>
            <ButtonComponent title='know more' />
          </Part>
        </Box>
      </Container>
      <Bottom>
        <Line></Line>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rerum odio distinctio necessitatibus veniam. Libero porro, odio, dolores perferendis exercitationem iusto, laudantium eos cupiditate deleniti laboriosam quibusdam doloremque dignissimos sint eveniet ipsum vero corrupti cum vitae neque deserunt. Atque, ipsa!</p>
        </div>
      </Bottom>
      </MainContainer>
    </Section>
  )
}

export default Categories