import React from 'react'
import { AppleShortcuts, BookStack, Building, Dashboard, LayoutLeft, Menu, Reports, SelectiveTool, Settings, SquareCursor, Tv, IconoirProvider, Cellar, WebWindowSolid, Internet, WebWindow, Edit, NetworkSolid, CardLock, ReportColumns, User, DocMagnifyingGlass } from 'iconoir-react'
import { IoDocumentAttach } from 'solid-icons/io'

export default function Admin() {

  return (

    <div className="menu__links">

        <a href='/admin/vision' className="link vision" > 

        <div className="icon"><LayoutLeft/></div> 
        <div className="text">Vision & Mission</div>
        
        </a>

        <a href='/admin/agencies' className="link agencies"> 

        <div className="icon"><Cellar/></div> 
        <div className="text"> Agencies </div>
        
        </a>

        <a href='/admin/responsibility' className="link responsibility"> 

        <div className="icon"><Edit /></div> 
        <div className="text"> Responsibilities </div>
        
        </a>

        <a href='/admin/resources' className="link resources"> 

        <div className="icon"><DocMagnifyingGlass /></div> 
        <div className="text"> Resources </div>
        
        </a>

        <a href='/admin/people' className="link people"> 

        <div className="icon"><User/></div> 
        <div className="text"> People </div>
        
        </a>

        <a href='/admin/contact_info' className="link contact_info"> 

        <div className="icon"><AppleShortcuts /></div> 
        <div className="text"> Contact </div>
        
        </a>

    </div>
    
  )

}
