import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import data from '../data'
import Accordion  from '../Accordion'



const Section = styled.section `
height: auto;
width: 100W;
position: relative;
margin-top: 4rem; 
`

const Container = styled.div`
width: 85%;
margin: 0 auto;

h4{
  text-align: center;
}

@media(max-width: 40em){
  width: 90%;
}
`

const MainContainer = styled.div`
width: 80%;
margin: 0 auto;
margin-top: 2rem;
display: flex;
justify-content: center;
flex-direction: column;
}

@media(max-width: 40em){
  width: 100%;
}
`




const Faq = () => {

  const [questions, setQuestions] = useState(data)
  return (
    <Section>
      <Container>
\        <h4 className='tophead'>see our faqs</h4>
        <MainContainer>
          {
            questions.map(question  => {
              return <Accordion key={question.id} {...question} />
            })
          }
        </MainContainer>
      </Container>
    </Section>
  )
}

export default Faq