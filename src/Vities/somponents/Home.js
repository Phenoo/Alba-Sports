import React from 'react'
import styled from 'styled-components'
import SportSwiper from './SportSwiper'
import SportTypewrites from './SportTypewrites'

const Section = styled.section `
height: auto;
width: 100W;
position: relative;
margin-top: 2rem; 
`

const Container = styled.div`
width: 85%;
margin: 0 auto;
display: flex;
gap: 2rem;

@media(max-width: 64em){
  width: 90%;
  flex-direction: column;
}
`

const Box = styled.div`
width: 50%;
}

@media(max-width: 64em){
  width: 100%;
}
`

const Stats = styled.div`
display: flex;
justify-content: space-between;
gap: 2rem;
margin-top: 2rem;
`
const StatItems = styled.div`

`

const StatTitle = styled.h4`
font-size: ${props => props.theme.fontxl};
text-align: center;

@media(max-width: 650px){
font-size: ${props => props.theme.fontlg};
}

@media(max-width: 31rem){
  font-size: 0.9rem;
}

`
const StatsText = styled.h6`
text-transform: uppercase;
margin-top: 5px;
text-align: center;


@media(max-width: 650px){
  font-size: 12px;
}

@media(max-width: 31rem){
    font-size: 0.6rem;
}  
`




const Home = () => {
  return (
    <Section id='home'>
      <Container>
        <Box>
        <SportTypewrites />
        <Stats>
          <StatItems>
            <StatTitle>
              7k+
            </StatTitle>
            <StatsText>active members</StatsText>
          </StatItems>
          <StatItems>
            <StatTitle>
              110+
            </StatTitle>
            <StatsText>expert trainers</StatsText>
          </StatItems>
          <StatItems>
            <StatTitle>
              10+
            </StatTitle>
            <StatsText>sports</StatsText>
          </StatItems>
          <StatItems>
            <StatTitle>
              50+
            </StatTitle>
            <StatsText>awards</StatsText>
          </StatItems>
        </Stats>
        </Box>
        <Box>
          <SportSwiper />
        </Box>
      </Container>
    </Section>
  )
}

export default Home