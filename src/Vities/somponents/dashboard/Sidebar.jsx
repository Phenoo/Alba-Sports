import React, {useState} from 'react'
import {useAuth} from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { MdDashboard} from '@react-icons/all-files/md/MdDashboard'
import {RiDashboard2Fill} from '@react-icons/all-files/ri/RiDashboard2Fill'
import { FaAddressCard} from '@react-icons/all-files/fa/FaAddressCard'
import {GiTwirlCenter} from '@react-icons/all-files/gi/GiTwirlCenter'
import {FiLogOut} from '@react-icons/all-files/fi/FiLogOut'
import {IoSettings} from '@react-icons/all-files/io5/IoSettings'
import {BsFillChatQuoteFill} from '@react-icons/all-files/bs/BsFillChatQuoteFill'


const Section = styled.section`
position: fixed;
top: 0;
left: 0;
background: #2121;
height: 92vh;
width: 7vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2rem 0;
gap: 1rem;
transition: width 0.3s ease-in-out;

@media screen and (max-width: 800px) {
  display: ${props => props.click ? '' : ''};
  width: ${props => props.click ? '40vw' : '0'};

}

.top{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 800px) {
    display: ${props => props.click ? 'flex' : 'none'};
  }

}


.brand{
  width: 100%;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;

  svg{
    
  }
}

.links{
  display: flex;
  justify-content: center;


  ul{
    display: flex;
    flex-direction: column;
    gap: 1rem;


    li{
      padding: 0.6rem 1rem; 
      border-radius: 0.2rem;
      @media screen and (max-width: 30rem) {
        padding: 0.5rem;
      }
    svg{
      @media screen and (max-width: 30rem) {
        font-size: 0.7rem;

      }
    }

    span{
      display: none;
      font-family: "Poppins";

      @media screen and (max-width: 800px) {
        display: ${props => props.click ? 'flex' : 'none'};
      }
      @media screen and (max-width: 40rem) {
        font-size: 0.7rem;
      }
      @media screen and (max-width: 22rem) {
        font-size: 0.5rem;
      }
    }

    &:hover{
    background-color: #ffc107;
    
    a{
    color: #000;
    }
    }
    a{
      display: flex;
      gap: 1rem;
      color: #000;
      @media screen and (max-width: 30rem) {
        gap: 0.3rem;
      }
    }
    }
    .active{
    background-color: #ffc107;
    color: #000;
    }
  }
}

.logout{
  padding: 0.3rem 1rem;
  border-radius: 0.6rem;
  span{
    display: none;
  }
  &:hover{
    background-color: #da0037;
  }
  a{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #000;
  }

  @media screen and (max-width: 800px) {
    display: ${props => props.click ? 'flex' : 'none'};
  }
}


.btn{
  cursor: pointer;

  @media screen and (min-width: 800px) {
    display: none;
  }
  div{
    position: absolute;
    top: 3rem;
    left: 20px;
    width: 50px;
    height: 2px;
    background: #000;
    
    &::before{
      content: '';
      width:${props => props.click ? '1rem' : '1.5rem'};
      height: 2px;
      top: 10px;
      background: #000;
      position: absolute;
      cursor: pointer;
    }
  }
}

`;


const Sidebar = () => {
  const [click, setClick] = useState(false);
  const [current, setCurrentLink] = useState(1);

  const navigate = useNavigate();


  const {logOut} = useAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <>

      <Section click={click}>
        <button className="btn" onClick={() => {setClick(!click)}}>
          <div></div>
        </button>
      <div className="top">

      <div className="links">
          <ul>
            <li onClick={() => setCurrentLink(1)} className={current === 1 ? 'active' : ''}>
              <a href="#a">
                <MdDashboard />
                <span>Dashboard</span>
              </a>
            </li>
            <li onClick={() => setCurrentLink(2)} className={current === 2 ? 'active' : ''}>
              <a href="#schedule">
                <RiDashboard2Fill />
                <span>Schedule</span>
              </a>
            </li>
            <li onClick={() => setCurrentLink(3)} className={current === 3 ? 'active' : ''}>
              <a href="#Payment">
                <FaAddressCard />
                <span>Payment Details</span>
              </a>
            </li>
            <li onClick={() => setCurrentLink(4)} className={current === 4 ? 'active' : ''}>
              <a href="#Learning">
                <GiTwirlCenter />
                <span>Learning Center</span>
              </a>
            </li>
            <li onClick={() => setCurrentLink(5)} className={current === 5 ? 'active' : ''}>
              <a href="#FAQs">
                <BsFillChatQuoteFill />
                <span>FAQs</span>
              </a>
            </li><li onClick={() => setCurrentLink(6)} className={current === 6 ? 'active' : ''}>
              <a href="#Settings">
                <IoSettings />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="logout">
        <button onClick={handleSignOut}>
          <FiLogOut />
          <span className='logout'  >Logout</span>
        </button>
      </div>
    </Section>
    </>
  )
}

export default Sidebar