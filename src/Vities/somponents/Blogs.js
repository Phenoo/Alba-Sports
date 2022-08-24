import React from 'react'
import styled from 'styled-components'

import Blog1 from '../../sports/blog1.jpeg'
import Blog2 from '../../sports/blog2.jpeg'
import Blog3 from '../../sports/blog3.jpeg'
import Blog4 from '../../sports/blog4.jpeg'

const Section = styled.section `
height: auto;
width: 100W;
position: relative;
margin-top: 6rem; 
`

const Container = styled.div`
width: 85%;
margin: 0 auto;
.tophead{
  margin-right: 1rem;
}

@media(max-width: 64em){
  width: 90%;
}
`

const MainContainer = styled.div`
width: 90%;
margin: 0 auto;
margin-top: 2rem;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 3rem;

@media(max-width: 64em){
  grid-template-columns: 100%;
}

h6{
  font-size: ${props => props.theme.fontlg};
  text-transform: capitalize;
  
  @media(max-width: 500px){
    font-size: ${props => props.theme.fontmd};
  }
}

p{
  font-size: ${props => props.theme.fontsm};
  margin-top: 10px;
}
`


const Header = styled.div`
display: flex;
justify-content: space-between;
`
const MasterBox = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
height: 100%;
width: 100%;
`
const Box = styled.a`
display: flex;
gap: 2rem;
align-items: center;
width: 90%;
cursor: pointer;

transition: 0.2s;

&:hover{
  transform: scale(0.9);
}

@media(max-width: 64em){
  width: 100%;
}


h6{
  font-size: ${props => props.theme.fontlg};
  text-transform: capitalize;

@media(max-width: 40em){
  font-size: ${props => props.theme.fontsm};
  }
}
p{
  font-size: ${props => props.theme.fontsm};
  margin-top: 10px;

  @media(max-width: 40em){
    font-size: 0.7rem;
    }
    @media(max-width: 24em){
      font-size: 0.5rem;
      }
}
`

const Part = styled.div`
transition: 0.2s;

&:hover{
  transform: scale(0.9);
}
`
const PartImg = styled.div`

img{
  width: 100px;
  height: 100px;
  border-radius: 10px;
}
`
const VirginBox = styled.div`
height: 100%;
width: 100%;
position: relative;
background-image: url(${Blog4});
border-radius: 10px;
display: flex;
justify-content: flex-end;
flex-direction: column;

cursor: pointer;
transition: 0.2s ease;


&:hover{
  transform: scale(0.9);
}
div{
  background-color: #fff;
  width: 70%;
border-radius: 0 0 0 10px;
  padding: 1rem;
  margin: 0;

  @media(max-width: 32em){
    padding: 0.5rem;
  }
}

h6{
  font-size: ${props => props.theme.fontlg};
  text-transform: capitalize;

  @media(max-width: 40em){
    font-size: ${props => props.theme.fontsm};
  }

  @media(max-width: 30em){
    font-size: 0.7rem;
  }

}
p{
  font-size: ${props => props.theme.fontsm};
  margin-top: 10px;

  @media(max-width: 40em){
    font-size: 0.5rem;
    margin-top: 5px;
    }
}
`

const Postlink = styled.a`
display: flex;
align-items: flex-end;
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
text-decoration: underline;
text-align: right;
cursor: pointer;
transition: all 0.2s ease;

&:hover{
  transform: scale(1.1);
}
`

const Blogs = () => {
  return (
    <Section id='blogs'>
      <Container>
      <Header>
        <h4 className='tophead'>read our latest blogs</h4>
        <Postlink>
          explore all posts
        </Postlink>
        </Header>
        <MainContainer>
          <MasterBox>
          <Box>
          <PartImg>
            <img src={Blog1} alt="blogpost" />
          </PartImg>
          <Part>
            <h6>Thr basketball home gym for quarantined</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit magnam accusamus placeat vitae. Dolor</p>
          </Part>
        </Box><Box>
          <PartImg>
            <img src={Blog2} alt="blogpost" />
          </PartImg>
          <Part>
          <h6>The next big thing: eze desco</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit magnam accusamus placeat vitae. Dolor</p>
          </Part>
        </Box>
        <Box>
          < PartImg>
            <img src={Blog3} alt="blogpost" />
          </PartImg>
          <Part>
          <h6>Sports Nutrition - 24 athletic diseases</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit magnam accusamus placeat vitae. Dolor</p>
          </Part>
        </Box>
          </MasterBox>

        <VirginBox>
          <PartImg>
            <div>
          <h6>2023 world cup: who will take the crown</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit magnam accusamus placeat vitae. Dolor</p>
          </div>
          </PartImg>
          
        </VirginBox>
        </MainContainer>
      </Container>
    </Section>
  )
}

export default Blogs