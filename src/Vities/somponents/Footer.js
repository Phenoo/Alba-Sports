import React from 'react'

import styled from 'styled-components'
import ButtonComponent from '../Button'
import Logo from './Logo'

import {AiOutlineWhatsApp} from '@react-icons/all-files/ai/AiOutlineWhatsApp'
import {AiOutlineGithub} from '@react-icons/all-files/ai/AiOutlineGithub'
import {FaFacebook} from '@react-icons/all-files/fa/FaFacebook'
import {AiOutlineTwitter} from '@react-icons/all-files/ai/AiOutlineTwitter'
// import {GiMailbox} from '@react-icons/all-files/gi/GiMailbox'


const Section = styled.footer `
height: auto;
min-width: 100W;
position: relative;
margin-top: 6rem; 
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
margin: 0;

  svg{
    font-size: ${props => props.theme.fontxl};

    @media(max-width: 31em){
      font-size: ${props => props.theme.fontlg};
    }
}

.copy{
  margin-top: 2rem;
  text-align: center;
  font-size: ${props => props.theme.fontlg};
  border-top: 1px solid ${props => props.theme.body};
  padding: 10px;

  @media(max-width: 64em){
  font-size: ${props => props.theme.fontmd};
  }

  @media(max-width: 31em){
      font-size: ${props => props.theme.fontsm};
    }
}
}

p{
  @media(max-width: 35em){
    font-size: 0.7rem;
  }
}


`

const Container = styled.div`
padding-top: 3rem;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;

@media(max-width: 40em){
  gap: 1rem;
}

button:hover{
  border: 1px solid #fff;
  color: ${props => props.theme.body};
}

@media(max-width: 64em){
  grid-template-columns: 100%;

}

.logo{
  p{
    margin: 1rem 0;
  }
  div{
    display: flex;
    gap: 1rem;
  }

  svg{
    cursor: pointer;
    font-size: 1.5rem;
    color: white;
    transition: all 0.4s ease-in-out;

    @media(max-width: 31em){
      font-size: 1.25rem;
    }

    &:hover{
      transform: scale(1.3);
    }
  }

  .face:hover{
    color: blue;
  }
  .twit:hover{
    color: #227bce;
  }
  .whats:hover{
    color: green;
  }



}
`

const Container2 = styled.div`
padding-top: 4rem;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 2rem;



@media(max-width: 64em){
  grid-template-columns: 100%;
}

.logo{
  p{
    margin: 1rem 0;
  }
  div{
    display: flex;
    gap: 1rem;
  }

  svg{
    cursor: pointer;
    font-size: 1.2rem;
    color: white;
    transition: all 0.4s ease-in-out;
    color: ${props => props.theme.body};

    &:hover{
      transform: scale(1.3);
    }
  }

  .face:hover{
    color: blue;
  }
  .twit:hover{
    color: #227bce;
  }
  .whats:hover{
    color: green;
  }


}
`

const MainContainer = styled.div`
width: 85%;
margin: 0 auto;
margin-top: 4rem;
position: relative;
text-transform: capitalize;

.first div{
  display: flex;
align-items: center;
justify-content: center;


@media(max-width: 64em){
  align-items: flex-start;
  justify-content: flex-start;
}
}




`

const Foot = styled.div`
display: flex;
justify-content: center;
flex-direction: column;

.none{
  padding-inline-start: 0;
}
#nonev{
  padding-inline-start: 0;
}

@media(max-width: 64em){
  align-items: flex-start;
justify-content: flex-start;

.none{
  padding-inline-start: 0;
}

}

h6{
  text-transform: capitalize;
  font-size: ${props => props.theme.fontlg};

  @media(max-width: 31em){
    font-size: ${props => props.theme.fontmd};
  }
}
`
const Links = styled.ul`
margin: 0;
`
const LinkItem = styled.li`
padding-top: 1rem;
list-style: none;
text-transform: capitalize;
cursor: pointer;
display: block;
transition: all 0.3s ease;

&:hover{
  opacity: 0.7;
  transform: scaleX(1.1);
}
@media(max-width: 31em){
  font-size: ${props => props.theme.fontsm};
}

`

const Footer = () => {
  return (
      <Section>
        <MainContainer>
          <Container className='first'>
            <div>
              <h4 className='tophead'>join our community</h4>
            </div>
            <div>
              <ButtonComponent title='join now' className='btn'/>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quod eligendi sint rem impedit ex sunt, ullam commodi non dolores, vitae cupiditate eos voluptate voluptatibus.
              </p>
            </div>
          </Container>
          <Container2>
            <div className='logo'>
              <Logo />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              <div>
              <AiOutlineGithub className='git' />
              <FaFacebook  className='face'/>
              <AiOutlineTwitter className='twit' />
              <AiOutlineWhatsApp className='whats'/>
              </div>
            </div>
            <Foot>
              <h6>global network</h6>
              <Links className='none'>
                <LinkItem>Asia Pacific</LinkItem>
                <LinkItem>Europe</LinkItem>
                <LinkItem>Canada</LinkItem>
                <LinkItem>Latin America</LinkItem>
                <LinkItem>Africa</LinkItem>
              </Links>
            </Foot>
            <Foot>
              <h6>links</h6>
              <Links id='nonev'>
                <LinkItem>about</LinkItem>
                <LinkItem>our sports</LinkItem>
                <LinkItem>news</LinkItem>
                <LinkItem>contact us</LinkItem>
                <LinkItem>&nbsp;</LinkItem>
              </Links>
            </Foot>
            <Foot>
              <h6>legal</h6>
              <Links className='none'>
                <LinkItem>privacy policy</LinkItem>
                <LinkItem>terms & conditions</LinkItem>
                <LinkItem>&nbsp;</LinkItem>
                <LinkItem>&nbsp;</LinkItem>
                <LinkItem>&nbsp;</LinkItem>

              </Links>
            </Foot>
          </Container2>
          <div className='copy'>
          <p>&copy; Alba.com. All rights reserved</p>          
        </div>
        </MainContainer>
      </Section>
  )
}

export default Footer