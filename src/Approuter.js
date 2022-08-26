import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { ThemeProvider } from 'styled-components'
import Globalstyles from './styles/Globalstyles'
import { neutral } from './styles/Theme'
import './AppSports.css'


import AppSports from './Vities/AppSports'
import SignIn from './Vities/somponents/SignIn'
import SignUp from './Vities/somponents/SignUp'
import ProtectedUser from './ProtectedUser'
import AppDashboard from './Vities/AppDashboard'
import { AuthProvider } from './context/AuthContext'

const Approuter = () => {
  const location = useLocation();
  return (
    <>
      <Globalstyles />
      <ThemeProvider theme={neutral} >
        <AuthProvider>
          <Routes location={location} key={location.pathname}>
            <Route exact path='/user' element={<ProtectedUser>
              <AppDashboard />
            </ProtectedUser>} />
            <Route exact path='/' element={<AppSports/>} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
        </AuthProvider>
    </ThemeProvider>
    </>
  )
}

export default Approuter