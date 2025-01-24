import React, { useState, useEffect } from 'react'
import Sidebar from './sidebar/sidebar'
import Heading from './heading/Heading'

import './dashboard.scss'
import Vision from './pages/vision'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Agency from './pages/agencies'
import { getAdminData } from '../api/core/admin'
import Responsibilities from './pages/responsibilities'
import People from './pages/people'
import Contact from './pages/contact'
import Resources from './pages/resources'

const Dashboard = () => {

  let { page } = useParams();
  let { pathname } = useLocation()
  let navigate = useNavigate();

  const[data, setData] = useState({})

  useEffect(() => {
    
    getAdminData("sto")
    .then( res => setData(res[0]) )

    if (page === undefined){
      navigate("/admin/vision")
    }

  }, []);

  useEffect(() => {
    
    if (pathname.split('/')[1] === "admin"){
      document.body.style.backgroundColor = "#fff"
    }

  }, []);

  const getPage = () => {

      if(page == "vision") return <Vision inData = {data} />

      if(page == "agencies") return <Agency inData = {data}/>

      if(page == "responsibility") return <Responsibilities inData = {data}/>

      if(page == "resources") return <Resources inData = {data}/>

      if(page == "people") return <People inData = {data}/>

      if(page == "contact_info") return <Contact inData = {data}/>

  }

  return (

    <div className="dashboard">

        <Sidebar/>

        <div className="dashboardHeader"> <Heading/> </div>
        
        <div className="dashboardPages">
            
            {
              getPage()
            }
            
        </div>
        
    </div>

  )
}

export default Dashboard
