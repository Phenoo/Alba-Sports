import React from 'react'
import styled from 'styled-components'
import GIF from '../../sports/Pexels Videos 1585618.mp4'


const Container = styled.div`
width: 85%;
margin: 0 auto;

video{
  width: 100%;
  height: auto;
}
`
const Video = () => {
  return (
      <Container>
      <video src={GIF} type='video/mp4' autoPlay  muted loop/>
      </Container>
  )
}

export default Video