import React,{useEffect, useState} from 'react'
import './sidebar.scss'

import { AppleShortcuts, BookStack, Building, Dashboard, LayoutLeft, Menu, Reports, SelectiveTool, Settings, SquareCursor, Tv, IconoirProvider, Cellar, WebWindowSolid, Internet, WebWindow, Edit, NetworkSolid, CardLock, ReportColumns } from 'iconoir-react'

import { useLocation, useNavigate, useParams } from 'react-router-dom'

import Admin from './admin'
import Comms from './comms'

export default function Sidebar() {

  const [role, setRole] = useState("");

  let url = useLocation();
  let navigate = useNavigate();
  let { page } = useParams();

  useEffect(() => {

    getActive();
    
  }, [role]);

  const getActive = async () => {

      const getElementToBeActive = document.querySelector(`.${page}`);
      getElementToBeActive.classList.add('current-active')

  }

  useEffect(() => {

    const user = window.localStorage.getItem('lasg_mist_admin_token');
    const parser = JSON.parse(user);

    setRole(parser.role);

    
}, []);

  return (

    <div className="sidebar ">

      <IconoirProvider

          iconProps={{
            strokeWidth: 2
          }}

        >

          <div className="mainMenu">

              <div className="menu__heading">

                <div className="menu__controller"> <Menu/> </div>

              </div>

              {/* Menu Links */}

              {
                role === "admin" ? <Admin/> : <Comms/>
              }

          </div>
        
        </IconoirProvider>

    </div>


  )
}
