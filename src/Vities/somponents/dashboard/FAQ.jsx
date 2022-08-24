import React from 'react'
import styled from 'styled-components'

import { AiFillCalendar} from '@react-icons/all-files/ai/AiFillCalendar'
import { MdTimelapse} from '@react-icons/all-files/md/MdTimelapse'
import { IoMdCash} from '@react-icons/all-files/io/IoMdCash'
import {BsInfoCircle} from '@react-icons/all-files/bs/BsInfoCircle'
import { cardStyle } from './ReuseableStyles'


const Section = styled.section`
${cardStyle}
.title{
  display: flex;
  gap: 1rem;
  align-items: center;
  h2{
    font-family: 'Roboto', san-serif;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 400;
    text-align: center;

  @media (max-width: 22rem){
    font-size: 0.8rem;
  }
  }
}

.faqs{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  .faq{
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    .info{
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    h4{
      font-family: 'Jost', san-serif;
      font-size: 1rem;
      font-weight: 300;

      @media (max-width: 768px){
        font-size: 0.75rem;
      }

    }
    svg{
    font-size: 1.4rem;
    }
    &:nth-of-type(2n){
      border-top: 0.01rem solid #6c6e6e;
      border-bottom: 0.01rem solid #6c6e6e;
      padding: 0.8rem 0;
    }
  }
}

`

const FAQ = () => {
  const faqs = [
    {
      icon: <AiFillCalendar />,
      text: "How to manage time and eat the food"
    },
    {
      icon: <MdTimelapse />,
      text: "How to manage time and eat the food"
    },
    {
      icon: <IoMdCash />,
      text: "How to manage time and eat the food"
    },
    {
      icon: <AiFillCalendar />,
      text: "How to manage time and eat the food"
    },
    {
      icon: <MdTimelapse />,
      text: "How to manage time and eat the food"
    },
    {
      icon: <IoMdCash />,
      text: "How to manage time and eat the food"
    },
  ];
  return (
    <Section>
      <div className="title">
        <BsInfoCircle />
        <h2>information for members</h2>
      </div>
      <div className="faqs">
        {
          faqs.map((faq, index) => (
            <div className="faq" key={index}>
              <div className="info" >
                {faq.icon}
                <h4>{faq.text}</h4>
              </div>
            </div>
          ))
        }
      </div>
    </Section>
  )
}

export default FAQ