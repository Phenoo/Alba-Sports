import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './Vities/somponents/dashboard/Sidebar'
// import Sidebar from './components/Sidebar.jsx'


function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash/>
      </div>
    </div>
  );
}

export default App;










// import React from 'react'
// import { Route, Routes, useLocation } from 'react-router'
// import { ThemeProvider } from 'styled-components'
// import Globalstyles from './styles/Globalstyles'
// import { neutral } from './styles/Theme'



// import AppSports from './Vities/AppSports'
// // import SignUp from './Vities/somponents/SignUp'
// import AppDashboard from './Vities/AppDashboard'
// const Approuter = () => {
//   const location = useLocation();
//   return (
//     <>
//       <Globalstyles />
//       <ThemeProvider theme={neutral} >
//       <Routes location={location} key={location.pathname}>
//         <Route exact path='/' element={<AppSports/>} />
//         <Route exact path='/signup' element={<AppDashboard />} />
//       </Routes>
//     </ThemeProvider>
//     </>
//   )
// }

// export default Approuter