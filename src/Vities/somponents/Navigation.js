import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './Logo'

const Section = styled.section `
width: 100vw;
`

const NavBar = styled.nav `
display: flex;
justify-content: space-between;
align-items: center;

width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;

@media(max-width: 64em){
  width: 90%;
}

button{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
  padding: 0.6rem 1.5rem; 
  text-transform: uppercase;
  border-radius: 5px;
}
.mobile{
  display: none;
}

@media(max-width: 64em){
  .desktop{
    display: none;
  }
  .mobile{
    display: inline-block;
  }
}
`



const Menu = styled.ul `
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;


@media(max-width: 64em){
  display: flex;
  position: fixed; 
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  margin: 0;
  padding: 0;
  background-color: ${props => `rgba(${props.theme.textRgba}, 0.75)`};
  backdrop-filter: blur(2px);


  transform: ${props => props.click ? 'translateY(0)' : 'translateY(1000%)'} ;
  transition: all 0.3s ease;
  flex-direction: column;
  justify-content: center; 

  touch-action: none;   
}
`

const MenuItem = styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

font-size: ${props => props.click ? '1.3rem' : '1.1rem'};

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}

&:hover::after{
  width: 100%;
}

@media(max-width: 64em){
  margin: 1rem 0;
  color: ${props => props.theme.text};

  
&::after{
  display: none;
}
}
`


const Hamburger = styled.span`
width: 1.5rem;
height: 2px;
background: ${props => props.theme.text};

position: absolute;
top: 2rem;
left: 50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'} ;

display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.3s ease;
z-index: 100;

@media(max-width: 64em){
  left: 90%;
  display: flex;
}

display: none;
&::after, &::before{
  content: ' ';
  width:${props => props.click ? '1rem' : '1.5rem'};
  height: 2px;
  right: ${props => props.click ? '-2px' : '0'};
  background: ${props => props.theme.text};
  position: absolute;
  transition: all 0.3s ease;


}

&::after{
  top: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'} ;
}

&::before{
  bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
  transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'} ;

}

`

const Navigation = () => {

  const [click, setClick] = useState(false)

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
    setClick(!click)
  }
  return (
    <Section>
      <NavBar>
        <Logo />
        <Hamburger click={click} onClick={() => {setClick(!click)}}>
          &nbsp;
        </Hamburger>
        <Menu click={click}>
          <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo('category')}>Categories</MenuItem>
          <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
          <MenuItem onClick={() => scrollTo('experts')}>Experts</MenuItem>
          <MenuItem onClick={() => scrollTo('team')}>Review</MenuItem>
          <MenuItem onClick={() => scrollTo('blogs')}>Blogs</MenuItem>
          <MenuItem>
            <div className="mobile">
            <button>
            {
                <NavLink to='/signup'>
                  sign up
                </NavLink>
              }
          </button>
            </div>
          </MenuItem>
        </Menu>     
          <div className="desktop">
            <button>
              {
                <NavLink to='/signup'>
                  sign up
                </NavLink>
              }
            </button>
          </div>

      </NavBar>
    </Section>
  )
}

export default Navigation