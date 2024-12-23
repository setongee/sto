import { useState, useEffect } from 'react'

import './App.css'
import './styles/styles.scss'


import Header from './components/header/Header'
import { Outlet, redirect, useLocation } from "react-router-dom";
import Rrs from './components/rrs/Rrs'

export default function App() {

  let location = useLocation();
  let path = location.pathname.split('/')[1];

  useEffect(() => {

    if(location.pathname === '/') window.location.href = '/home';

  }, [location.pathname]);

  return (
    // Root Component for the Application
    <div className="mda__app">

      <div className={`${path === 'about' ? 'fixed headpart' : 'headpart'}`}>
        <Rrs/>
        <Header/>
      </div>

      <Outlet/>

    </div>
  )
}
