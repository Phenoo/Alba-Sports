import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';

import { Autoplay } from 'swiper';
import { BsInfoCircle } from '@react-icons/all-files/bs/BsInfoCircle'


import Item1 from '../../sports/baskethome.jpeg'
import Item2 from '../../sports/item1.jpeg'
import Item3 from '../../sports/item2.jpeg'
import Item4 from '../../sports/item3.jpeg'
import Item5 from '../../sports/homebox.jpeg'
import Item6 from '../../sports/homefooty.jpeg'
import Item7 from '../../sports/homeskate.jpeg'
import Item8 from '../../sports/homesport.jpeg'
import Item9 from '../../sports/review1.jpeg'
import Item10 from '../../sports/members.jpeg'
import Item11 from '../../sports/team.jpg'
import Item12 from '../../sports/team2.jpeg'

import Logo from './Logo';




const Box = styled.div `
height: 400px;
width: 100%;
position: relative;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;


.img-con{
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem ;
  position: relative;

}
.text-con{
  display: flex;
  gap: 1rem;
  position: absolute;
  align-items: center;
  width: 92.5%;
  height: auto;
  left: 0;
  bottom: 0;
  padding: 10px;
  margin: 10px;
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.55)`};
  backdrop-filter: blur(2px);
  color: #fff;
  text-transform: capitalize;
  border-radius: 10px;
  transition: all 0.4s ease;
}

h4{
  font-size: ${props => props.theme.fontlg};
}
h6{
  font-size: ${props => props.theme.fontmd};
  font-weight: 400;
}

svg{
  font-size: ${props => props.theme.fontxl};
}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 10px;
}

&:hover{
  img{
    opacity: 0.7;
  }
}
@media(max-width: 800px){
  display: none;
  visibility: hidden;
}
`

const SportSwiper = () => {
  return (
    <Swiper
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    loop={true}
    spaceBetween={50}
    className='swiper'
    modules={[Autoplay]}
    >
      <SwiperSlide>
        <Box>
          <div className='img-con basket'>
            <img src={Item4} alt="basket" />
            <Logo />
            <div className='text-con'>
            <BsInfoCircle />
          
            <h6>forward</h6>
          </div>
          </div>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box>
        <div className='img-con boxing' >
        <img src={Item1} alt="boxing" />
        <Logo />

          <div className='text-con'>
          <BsInfoCircle />
          
            <h6>forward</h6>
          </div>
          </div>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box>
        <div className='img-con skate'>
        <img src={Item2} alt="skate" />
        <Logo />

          <div className='text-con'>
          <BsInfoCircle />
            <h6>forward</h6>
          </div>
          </div>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box>
      <div className='img-con footy'>
      <img src={Item3} alt="footy" />
      <Logo />
          <div className='text-con'>
          <BsInfoCircle />
            <h6>forward</h6>
          </div>
          </div>
      </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box>
      <div className='img-con footy'>
      <img src={Item5} alt="footy" />
      <Logo />
          <div className='text-con'>
          <BsInfoCircle />
            <h6>forward</h6>
          </div>
          </div>
      </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box>
      <div className='img-con footy'>
      <img src={Item6} alt="footy" />
      <Logo />
          <div className='text-con'>
          <BsInfoCircle />
            <h6>forward</h6>
          </div>
          </div>
      </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box>
      <div className='img-con footy'>
      <img src={Item7} alt="footy" />
      <Logo />

          <div className='text-con'>
          <BsInfoCircle />
            <h6>forward</h6>
          </div>
          </div>
      </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box>
      <div className='img-con footy'>
      <img src={Item8} alt="footy" />
      <Logo />
          <div className='text-con'>
          <BsInfoCircle />
            <h6>forward</h6>
          </div>
          </div>
      </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box>
      <div className='img-con footy'>
      <img src={Item9} alt="footy" />
      <Logo />
          <div className='text-con'>
          <BsInfoCircle />
            <h6>forward</h6>
          </div>
          </div>
      </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box>
      <div className='img-con footy'>
      <img src={Item10} alt="footy" />
      <Logo />
          <div className='text-con'>
            <BsInfoCircle />
            <h6>forward</h6>
          </div>
          </div>
      </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box>
      <div className='img-con footy'>
      <img src={Item11} alt="footy" />
      <Logo />
          <div className='text-con'>
            <BsInfoCircle />
            <h6>forward</h6>
          </div>
          </div>
      </Box>
      </SwiperSlide>
      <SwiperSlide>
      <Box>
      <div className='img-con footy'>
      <img src={Item12} alt="footy" />
      <Logo />
          <div className='text-con'>
            <BsInfoCircle />
            <h6>forward</h6>
          </div>
          </div>
      </Box>
      </SwiperSlide>
    </Swiper>
  )
}

export default SportSwiper