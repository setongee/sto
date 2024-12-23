import React, {useEffect} from 'react'
import './header.scss'
import Container from '../container/Container'
import logo from '../../assets/logo/lasg__logo.png'
import Button from '../button/Button'
import { useLocation } from 'react-router-dom'
import { NavArrowDown } from 'iconoir-react'

export default function Header() {

  var location = useLocation().pathname.split('/')[1];

  useEffect(() => {

    const nav__lists = document.querySelector('.navigations');
    const active = nav__lists.querySelector('.current');

    if (active !== null){
      active.classList.remove('current');
    }else{
      console.log('sorry this url is not correct!');
    }
    
    const nav = Array.from(document.querySelectorAll('#nav'));
    const getnav = nav.filter((navigation => {
      
      var data = navigation.dataset.navigation;

      return data === location;

    }) )

    if (getnav.length){
      getnav[0].classList.add('current');
    }

  }, [location]);

  return (

    <div className="header header_type_drill flex flex__align__center font__12 text__trend">

        <Container customClass = 'flex__combo__align__spacebtw'>

            <div className="brand_area flex flex__align__center gap__15">

              <div className="logo image__logo image__item"> 
                <img src={logo} alt="Lagos State Government Ministry, Department & Agency" /> 
              </div>

              <p className="font__12 text__trend"> State Treasury Office (STO) </p>

            </div>

            {/* navigations */}

            <div className="navigations flex flex__align__center gap__40 font__weight__600">

                <li id='nav' className='flex flex__align__center current' data-navigation = 'home'>
                  <a className='dark  font__12 text__trend letter__spacing__2' href="/home">Home</a>
                </li>
                
                <li id='nav' className='flex flex__align__center' data-navigation = 'about'>
                  <a className='dark  font__12 text__trend letter__spacing__2' href="/about">About</a>
                </li>

                <li id='nav' className='flex flex__align__center' data-navigation = 'newsroom'>
                  <a className='dark  font__12 text__trend letter__spacing__2' href="/newsroom"> Newsroom </a>
                </li>

                <li id='nav' className='flex flex__align__center' data-navigation = 'resources'>
                  <a className='dark  font__12 text__trend letter__spacing__2' href="/resources">Resources</a>
                </li>

                <li id='nav' className='flex flex__align__center' data-navigation = 'connect'>
                  <a className='dark  font__12 text__trend letter__spacing__2' href="/connect">Connect</a>
                </li>

            </div>

        </Container>

    </div>

  )
}
