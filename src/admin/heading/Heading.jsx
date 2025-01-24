import React, {useState, useEffect} from 'react'
import logo from '../../assets/logo/lasg__logo.png'
import './heading.scss'
import { getSingleUser } from '../../api/core/auth/user'

const Heading = () => {

const [userDetails, setUserDetails] = useState({ firstname : "", lastname : "", role : "" })

useEffect(() => {

    const user = window.localStorage.getItem('lasg_mist_admin_token');
    const parser = JSON.parse(user);

    getSingleUser(parser.id)
    .then( res => setUserDetails({firstname : res.firstname, lastname : res.lastname, role : res.role}) )

    
}, []);

const handleSignOut = () => {

    window.localStorage.removeItem('lasg_mist_admin_token');
    window.location.reload();

}

console.log(userDetails)

  return (

    <div className="headingAdmin">

        <div className="brand flex">
          <div className="logo__side"> <img src={logo} alt="Lagos State MIST Logo" /> </div>
          Ministry of Health Admin Portal
        </div>

        <div className="account">

                <div className="namePin">{ userDetails.firstname.toUpperCase().split("")[0] }{ userDetails.lastname.toUpperCase().split("")[0] }</div>
                
                <div className="namePinFull">

                    <div className="fullname">{userDetails.firstname} {userDetails.lastname}</div>
                    <div className="roleArea"> {userDetails.role} </div>
                    
                </div>

        </div>

    </div>

  )

}

export default Heading
