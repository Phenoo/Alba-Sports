import React from 'react'
import styled from 'styled-components'
import { cardStyle } from './ReuseableStyles'


import {GiGymBag} from '@react-icons/all-files/gi/GiGymBag'
import {GiWeightLiftingUp} from '@react-icons/all-files/gi/GiWeightLiftingUp'
import {CgGym} from '@react-icons/all-files/cg/CgGym'
import {BiDumbbell} from '@react-icons/all-files/bi/BiDumbbell'

import Coach1 from '../../../sports/coach.png'
import Coach2 from '../../../sports/coach2.jpeg'
import Coach3 from '../../../sports/coach3.png'
import Coach4 from '../../../sports/coach4.png'

const Section = styled.section`
display: flex;
gap: 1rem;
flex-direction: column;
${cardStyle};
font-family: 'Poppins';

.activity{
  display: flex;
  gap: 1rem;
  justify-content: space-between;


  .first{
    background-image: linear-gradient(to right, #800080, #fff);
  }
  .second{
    background-image: linear-gradient(to right, #008000, #ff0);
  }
  .third{
    background-image: linear-gradient(to right, #ffc107, #f0f);
  }
  .fourth{
    background-image: linear-gradient(to bottom, #0000ff, #ffc107);
  }
}

.img{
  width: 40px;
  height: 40px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  @media (max-width: 768px){
    width: 30px;
    height: 30px;
  }
}

.part{
  display: flex;
  align-items: center;
  gap: 1rem;

  h5{
    text-transform: capitalize;
    color: #808080;
    font-size: 12px;
    font-weight: 500;
  }
}

.svg{
  padding: 1rem;
  background-color: green;
  border-radius: 10px;

  svg{
    font-size: 1.2rem;
    color: #000;
  }
  @media (max-width: 768px){
    padding: 0.5rem;

    svg{
      font-size: 0.75rem;
    }
  }
}

.text{
  h6{
    font-size: 0.9rem;
    font-family: 'Jost';
  }
  p{
    font-size: 0.8rem;
    margin-top: 8px;
    color: #808080;
  }
  @media (max-width: 768px){
    h5{
      font-size: 0.6rem;
    }
    h6{
      font-size: 0.7rem;
    }
    p{
      font-size: 0.5rem;
    }
  }
}
`

const Schedule = () => {
  return (
    <Section>
      <div className="activity">
        <div className="part">
          <div className="svg first">
            <BiDumbbell />
          </div>
          <div className="text">
            <h6>Ultimate body workout</h6>
            <p>17 Feb, 2020 at 3.33PM </p>
          </div>
        </div>
        <div className="part">
          <div className="img">
            <img src={Coach1} alt="coach" />
          </div>
          <div className="text">
            <h5>
              Wasi m
            </h5>
          </div>
        </div>
      </div>
      <div className="activity">
        <div className="part">
          <div className="svg second">
            <CgGym />
          </div>
          <div className="text">
            <h6>Beginner to advance gym</h6>
            <p>17 Feb, 2022 at 2.32PM </p>
          </div>
        </div>
        <div className="part">
          <div className="img">
            <img src={Coach2} alt="coach" />
          </div>
          <div className="text">
            <h5>
              mufid t
            </h5>
          </div>
        </div>
      </div>
      <div className="activity">
        <div className="part">
          <div className="svg third">
            <GiGymBag />
          </div>
          <div className="text">
            <h6>Fitness for beginneres</h6>
            <p>17 Feb, 2020 at 4.53PM </p>
          </div>
        </div>
        <div className="part">
          <div className="img">
            <img src={Coach3} alt="coach" />
          </div>
          <div className="text">
            <h5>
              jawad a
            </h5>
          </div>
        </div>
      </div>
      <div className="activity">
        <div className="part">
          <div className="svg fourth">
            <GiWeightLiftingUp />
          </div>
          <div className="text">
            <h6>Body weight workout</h6>
            <p>17 Feb, 2020 at 2.30 PM </p>
          </div>
        </div>
        <div className="part">
          <div className="img">
            <img src={Coach4} alt="coach" />
          </div>
          <div className="text">
            <h5>
              arafay w
            </h5>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Schedule