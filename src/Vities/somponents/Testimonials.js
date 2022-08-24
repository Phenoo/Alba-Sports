import React, { useState } from 'react'
import styled from 'styled-components'
import {FaStar} from '@react-icons/all-files/fa/FaStar'
import { FaChevronRight} from '@react-icons/all-files/fa/FaChevronRight'
import { FaChevronLeft} from '@react-icons/all-files/fa/FaChevronLeft'
import { FaBasketballBall} from '@react-icons/all-files/fa/FaBasketballBall'
import { Items } from '../data'


const Section = styled.section`
width: 100vw;
position: relative;
margin-top: 6rem;
`

const MainContainer = styled.div`
width: 85%;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 3rem;

@media(max-width: 64em){
  width: 90%;
}
@media(max-width: 50em){
  gap: 1rem;
}

h4{
  margin-bottom: 10px;

  @media(max-width: 40em){
  margin-bottom: 5px;
  }
}

@media(max-width: 30em){
  grid-template-columns: 100%;
}
.dot{
  position: absolute;
  right: 30%;
  top: 50%;
  border-radius: 50%;
  svg{
    font-size: 1.5rem;
    color: orange;
  }
}
`

const Container = styled.div`

.star{
  margin: 10px 0;
  svg{
    color: orange;
  }
}
.desc{
  @media(max-width: 40em){
    font-size: 0.7rem;
  }
}

.profile{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  transition: all 0.4s ease;

  h6{
    font-size: ${props => props.theme.fontlg};
    @media(max-width: 40em){
      font-size: 0.9rem;
    }
  }
  p{
    margin: 8px 0;
    font-size: ${props => props.theme.fontmd};

    @media(max-width: 40em){
      margin: 0;
      font-size: 0.7rem;
    }
  }
  }
}

.btns{
  display: flex;
  align-items: center;
  gap: 1rem;
  button{
    display: flex;
    align-items: center;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3), 0 7px 21px 0 rgba(0, 0, 0,0.20);
    padding: 1rem;
    font-size: 1rem;
    border-radius: 50%;

    @media(max-width: 40em){
      padding: 0.75rem;
      font-size: 0.75rem;
    }
    
  }
}
`
const ImgContainer = styled.div`
position: relative;

@media(max-width: 30em){
  display: none;
}
img{
  position: absolute;
  width: 90px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.4s ease;
  object-fit: cover;

  @media(max-width: 50em){
    width: 70px;
  }
  @media(max-width: 50em){
    width: 50px;
  }

  @media(max-width: 30em){
    width: 30px;
  }
}

#test1{
  top: 10%;
  left: 0;
}
#test2{
  top: 30%;
  left: 40%;
}
#test3{
  top: -10%;
  right: 15%;
}
#test4{
  left: 20%;
  bottom: 0;
}
#test5{
  bottom: 20%;
  right: 0;
}

.active{
  transform: scale(1.5);
  @media(max-width: 50em){
    transform: scale(1.3);
  }
}
`



const Testimonials = () => {
  const [data, seData] = useState(Items);
  const [indes, setIndex] = useState(0);

  const {desc, name, job} = data[indes]

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((indes) => {
      let newIndex = indes + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((indes) => {
      let newIndex = indes - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <Section id='team'>
      <MainContainer>
          <ImgContainer>
          {
            data.map((item, index) => {
              return (
                <img key={index} src={item.img}
                alt={item.name} id={item.classway} className={`${index === indes && 'active'}`}/>
              )
            })
          }
            <div className="dot">
              <FaBasketballBall />
            </div>
          </ImgContainer>
        <Container>
          <h4 className="tophead">Player testomonials</h4>
          <p className="desc">{desc}</p>
          <div className="star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="profile">
            <div className="part">
              <div className="part1"></div>
              <h6>{name}</h6>
              <p>{job}</p>
            </div>
            <div className="btns">
              <button onClick={prevPerson}>
                <FaChevronLeft />
              </button>
              <button onClick={nextPerson}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </Container>
      </MainContainer>
    </Section>
  )
}

export default Testimonials