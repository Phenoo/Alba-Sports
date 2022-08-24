import React from 'react'
import styled from 'styled-components'

import Schedule from './Schedule'
import Navbar from './Navbar'
import Cards from '../../../components/Cards/Cards'
import Calendar from './Calendar'
import FAQ from './FAQ'

const Section = styled.section`
width: 85%;
margin: 0 auto;
padding: 2rem 0;
height: 100%;

@media screen and (max-width: 800px){
  width: 90%;  
} 
@media screen and (max-width: 22rem){
  width: 95%;
}

.grid{
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  margin-top: 2rem;

  .row__one{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 50%;
    gap: 1rem;

    @media screen and (max-width: 785px) {
      width: 100%;
      height: 100%;
      grid-template-columns: 100%;
  }
}
  .row__two{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 50%;
    gap: 1rem;

    @media screen and (max-width: 916px) {
      width: 100%;
      height: auto;
      grid-template-columns: 100%;
  }
}
`;

const Dashboard = ({user}) => {
  return (
    <Section>
      <Navbar user={user} />
      <div className="grid">
        <div className="row__one">
          <Cards />
          <Calendar />
        </div>
        <div className="row__two">
          <Schedule />
          <FAQ />
        </div>
      </div>
    </Section>
  )
}

export default Dashboard