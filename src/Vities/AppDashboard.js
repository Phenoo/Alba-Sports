import React from 'react'
import { useState } from 'react'

import Dashboard from './somponents/dashboard/Dashboard'
import Sidebar from './somponents/dashboard/Sidebar'
import { useAuth } from '../context/AuthContext'


const AppDashboard = () => {
  const [click, setClick] = useState(false);
  const {currentUser} = useAuth();
  return (
    <div>
      <Dashboard click={click} setClick={setClick} user={currentUser}/>
      <Sidebar click={click} />
    </div>
  )
}

export default AppDashboard