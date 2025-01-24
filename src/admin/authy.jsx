import React, {useState, useEffect} from 'react'
import './authy.scss'
import logo from '../assets/logo/lasg__logo.png'
import { authenticateToken, loginUser } from '../api/core/auth/login';
import Loader from '../components/loader/loader';
import Dashboard from './dashboard';
import { useLocation } from 'react-router-dom';

export default function Authy() {

    const [error, setError] = useState('');
    const [isValidated, setIsValidated] = useState(false);
    const [loginPage, setLoginPage] = useState(false)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let { pathname } = useLocation()

    useEffect(() => {
        
        const header = document.querySelector('.headpart');
        
        if (pathname.split('/')[1] === "admin"){

            if(header !== null) {

                header.style.display = "none"
                
            }
            
        }
        
    }, []);

    const handleVerification = (token) => {

        authenticateToken(token)
        .then(res => {

            if (res.status === "ok"){

                window.localStorage.setItem('lasg_mist_admin_token', JSON.stringify({ token, id : res.data.id, role : res.data.role }));
                setIsValidated(true);
                setLoginPage(false);

            } else{
                setIsValidated(false);
                setLoginPage(true);
            }

        } )
    
    }

    useEffect(() => {


        const user = window.localStorage.getItem('lasg_mist_admin_token');
        

        if (!user) {

            setIsValidated(false);
            setLoginPage(true)

        } else {

            const parser = JSON.parse(user);
            handleVerification(parser.token)

        }
 
        
    }, []);

    const handleLogin = (email, password) => {

        if (email === '' || password === '' ) {
            
            alert("All fields are required!");

        }
        else{

            loginUser(email, password)
            .then(res => {

                if(res.status === "ok") {

                    handleVerification(res.token)

                }else{

                    alert(res.message);

                }

            });

        }

    }

    if (loginPage) return (

        <div className="appHome">
    
            <div className="authPage">
    
            <div className="image__scoop"><img src={logo} alt="" /></div>

            <div className="loginPart">
    
                <div className="topicTitle"> Hello There!  {<br></br>} <span>Welcome to LASG MIST admin platform</span> </div>
    
                <div className="form"> 
    
                    <div className="auth__form">
                        <label>Email Address</label>
                        <input type="email" placeholder='Enter email id' id = 'access' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
    
                    <div className="auth__form">
                        <label>Password</label>
                        <input type="text" placeholder='Enter password' id = 'access_main' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
    
                    <div className="submitBtn" onClick = {  () => handleLogin(email, password) } > Log into dashboard </div>
    
                </div>
    
                <div className="errorZone" id='error'> {error} </div>
    
            </div>
    
            <p className='foot'>Powered by Ministry of Innovation, Science & Technology</p>
    
            </div>
    
        </div>
    
       )


   if (!isValidated) return <Loader/>


  return (

    // <App/>
    <Dashboard/>

  )

}
