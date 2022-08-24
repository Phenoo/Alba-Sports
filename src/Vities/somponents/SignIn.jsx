import React, { useState } from 'react'
import styled from 'styled-components'
import {Link, useNavigate } from 'react-router-dom'
import SignImg from '../../sports/images__14_-removebg-preview.png'
import Fans from  '../../sports/undrawfans.svg'
import { useAuth } from '../../context/AuthContext'
import Error from '../Error'

const Section = styled.section `
width: 100W;
height: 90vh;
position: relative;
margin: 0 auto;
padding: 2rem;
display: flex;
justify-content: center;
align-items: center;

@media(max-width:64em){
  .image-form{
    display: none;
  }
}

@media(max-width:25em){
  padding: 0;
}

`

const Container = styled.div`
width: 85%;
height: 80vh;
margin: 0 auto;
background-color: #fff;
border-radius: 10px;
padding: 3rem 1rem 1rem;

@media(max-width:64em){
  width: 90%;
  height: auto;
}

@media(max-width:30em){
  width: 95%;
  padding: 3rem 0 1rem;
}
`
const MainContainer = styled.div`
display: flex;
`
const Box = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 50%;
margin: 0 auto;
text-transform: capitalize;

@media(max-width:64em){
  width: 100%;
  margin: 0 auto;
}
h4{
  font-size: ${props => props.theme.fontxl};
  @media(max-width:38em){
    font-size: ${props => props.theme.fontlg};
  }

}
p{
  font-size: ${props => props.theme.fontmd};
  color: #808080;
  margin: 2px 0;
  cursor: pointer;
  @media(max-width:38em){
    font-size: 0.7rem;
  }
}
.flex{
  display: flex;
  justify-content: space-between;
}
form{
  width: 70%;
  margin: 0 auto;
  @media(max-width:30em){
    width: 80%;
  }

  .form-input{
    margin: 1rem 0;
  }
  label{
    font-weight: 600;
    display: block;
    @media(max-width:25em){
      font-size: 0.7rem;
    }
  }
  input{
    color: #808080;
    margin: 5px 0;
    width: 100%;
    padding: 10px;
    border: 1px solid #808080;
    border-radius: 2px;
    font-size: ${props => props.theme.fontlg};
    @media(max-width:38em){
      font-size: ${props => props.theme.fontsm};
    }
    @media(max-width:25em){
      font-size: 0.7rem;
    }
  }
}

a{
  font-weight: 600;
  font-size: ${props => props.theme.fontsm};
  transition: all 0.4s ease;
  cursor: pointer;
  @media(max-width:38em){
    font-size: 0.7rem;
  }
  &:hover{
    text-decoration: underline;
  }
}
.btn-container{
  margin: 1rem 0;
  button{
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    width: 100%;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    @media(max-width:25em){
      font-size: ${props => props.theme.fontsm};
    }
    img{
      width: 30px;
      aspect-ratio: 1/1;
      @media(max-width:38em){
        width: 20px;
      }
    }
  }
  #googlein{
    background-color: #000;
    color: #fff;

    &:hover{
      background-color: #fff;
      color: #000;
      border: 1px solid #808080;
    }
  }
  #signin{
    background-color: #fff;
    color: #000;
    border: 1px solid #808080;

    &:hover{
      background-color: #000;
      color: #fff;
    }
  }
}
img{
  width: 100%;
}
.outside{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  button{
    font-size: 0.7rem;
    background: none;
  }
}
`
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {login, googleSign } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password );
      console.log("login successfully")
      navigate("/user");
    } catch (err) {
      setError(err.message)
    }
  }

  const handleGoogleIn = async (e) => {
    e.preventDefault();
    try {
      await googleSign(); 
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <Section>
      <Container>
        <MainContainer>
        <Box>
          <h4>welcome back</h4>
          <p>welcome back! to Alba.Com</p>
          {error && <Error />}
          <form onSubmit={handleSubmit}>
            <div className="form-input">
            <label htmlFor="">email</label>
            <input type="email" id="email" placeholder='Enter your email'
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div className="form-input">
              <label htmlFor="">password</label>
              <input type="password"  id="password"  placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}

              />
            </div>
            <div className="flex">
              <a href="/">
                &nbsp;
              </a>
              <a href="/">
                forgot password
              </a>
            </div>
            <div className="btn-container">
              <button id='signin' type='submit'>Sign in</button>
              <button id='googlein' type='submit' onClick={handleGoogleIn}>
                <img src={SignImg} alt="google" />
                Sign in with Google</button>
            </div>
          </form>
          <div className="outside">
            <p>Don't have an account?</p>
            <Link to="/signup">
              Sign up for free
            </Link>
          </div>
        </Box>
        <Box className='image-form'>
          <img src={Fans} alt="fans" />
        </Box>
        </MainContainer>
      </Container>
    </Section>
  )
}

export default SignIn