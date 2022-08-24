import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';


import ReviewImg from '../../sports/coach2.jpeg'
import ReviewImg2 from '../../sports/coach1.webp'
import ReviewImg3 from '../../sports/coach3.jpeg'

const Section = styled.section `
width: 100vw;
position: relative;
margin-top: 6rem;

`
const MainContainer = styled.div `
width: 85%;
margin: 0 auto;

@media(max-width: 64em){
  width: 90%;
}
`
const Container = styled.div `
display: grid;
grid-template-columns: 45% 55%;
gap: 1rem;
@media(max-width: 40em){
  grid-template-columns: 100%;
}
`
const Text = styled.div`
width: 70%;
h4{
}

p{
  font-size: ${props => props.theme.fontsm};
  font-weight: 300;
  margin-top: 0.75rem;

  @media(max-width: 600px){
    font-size: 0.75rem;
    margin-top: 0.5rem;
    }
  @media(max-width: 31em){
    font-size: 0.7rem;
    margin-top: 0.25rem;
  }

}

}
`
const Image = styled.div`
`
const ImgContainer = styled.div`

img{
  width: 215px;
  height: 240px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 1rem; 
}



.swiper{
  width: 100%;
  height: 100%;
}

.swiper-slide{
  width: auto;
  height: 100%;
}
`

const Experts = () => {
  return (
    <Section id='experts'>
      <MainContainer>
      <Container>
        <Text>
          <h4 className='tophead'>
            meet our experts
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, obcaecati iure natus qui quos, repudiandae officiis consectetur mollitia adipisci voluptates fugit perferendis facilis libero quod ipsa vitae odio autem alias!</p>
        </Text>
        <Image>
          <ImgContainer>
          <Swiper
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              slidesPerView={"auto"}
              spaceBetween={20}
              className='swiper'
              modules={[Autoplay]}
          >
            <SwiperSlide>
              <img src={ReviewImg} alt="review" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ReviewImg2} alt="review" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ReviewImg3} alt="review" />
            </SwiperSlide>
          </Swiper>
          </ImgContainer>
        </Image>
      </Container>
      </MainContainer>
    </Section>
  )
}

export default Experts