import React from 'react'
import NavBar from "./NavBar";
import LandingNavBar from './LandingNavBar';
import Footer from "./Footer";
import { Outlet, useLocation } from 'react-router-dom';


const Body = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  return (
    <div className='min-h-screen flex flex-col'>
      {isLandingPage ? <LandingNavBar/> : <NavBar/>}
      <Outlet/>
      <Footer />
    </div>
  )
}

export default Body
