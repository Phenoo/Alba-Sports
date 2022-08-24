import React from 'react'
import styled from 'styled-components'
import {AiOutlineBell} from '@react-icons/all-files/ai/AiOutlineBell'
import Logo from '../Logo'

import Profile from '../../../sports/coach2.jpeg'
const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
color: #fff;

.title{
  margin-left: 4rem;
  color: #111;
  .cLdKeD{
    text-align: center;
  }
}
.title-con{
    h4{
      color: #ffc107;
      font-family: 'Jost', san-serif;
      font-size: 1rem;
      @media screen and (max-width: 25em){
        font-size: 0.7rem;
      }
    }
}

.search{
  background-color: #000;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  padding: 1rem 8rem 1rem 1rem;
  
  svg{
    color: #ffc107;

    
  }

  input{
    background-color: transparent;
    border: none;
    color: #ffc107;
    letter-spacing: 0.3rem;

    &::placeholder{
    color: #ffc107;
    }

  }
}


.profile{
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 30em){
    gap: 0.5rem;
  }

  .div{
    width: 10px;
    height: 10px;
    background-color: #f00;
    position: absolute;
    top: -0.09rem;
    right: -0.05px;
    border-radius: 50%;
  }

  span{
    position: relative;

  }
  svg{
    cursor: pointer;
    font-size: 2rem;
    color: #111;
    @media screen and (max-width: 785px){
      font-size: 1.75rem;
    }
    @media screen and (max-width: 30em){
      font-size: 1.3rem;
  }
}
.profile-img{
  width: 50px;
  aspect-ratio: 1/1;
  @media screen and (max-width: 30em){
    width: 35px;
  }

  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
}


`;

const Navbar = ({user}) => {
  return (
    <Nav>
      <div className="title">
        <Logo />
        <span className="title-con">
          <h4>Hi, {user.email}</h4>
        </span>
      </div>
      <div className="profile">
          <span>
            <AiOutlineBell />
            <div className="div"></div>
						</span>
        <div className="profile-img">
          <img src={Profile} alt="profile" />
        </div>
      </div>
    </Nav>
  )
}

export default Navbar