import React,{useState, useEffect} from 'react'
import './footer.scss'
import { ArrowUpRight, FacebookTag, Instagram, Linkedin, Mail, MapPin, Phone, X, Youtube } from 'iconoir-react'
import Container from '../container/Container'

export default function Footer() {

  const [time, setTime] = useState('');

  useEffect(() => {
    
    const d = new Date();
    let hour = d.getHours();

    if ( hour >= 0  && hour < 12 ) {
      setTime('Good Morning ☀️');
    } else if ( hour >= 12 && hour < 18 ){
      setTime('Good Afternoon 🌤️');
    } else{
      setTime('Good Evening 🌙');
    }

  }, []);

  return (

    <div className="footer footer__new">

        <Container>

            <div className="footerContent">

              <div className="topPart">

                <h1> Lagos, <span>{time.toLowerCase()}</span> </h1>

                {/* socials */}

                {/* <div className="socialsIcon flex">

                  <a target = '_blank' href='https://www.instagram.com/lagoshealth/' className="icon"><Instagram width={22} strokeWidth={1.6}/></a> 
                  <a target = '_blank' href = 'https://twitter.com/LSMOH' className="icon"><X width={22} strokeWidth={1.6}/></a>
                  <a target = '_blank' href='https://web.facebook.com/lsmoh' className="icon"><FacebookTag width={22} strokeWidth={1.6}/></a>
                  <a target = '_blank' href='https://www.instagram.com/lagoshealth/' className="icon"><Youtube width={22} strokeWidth={1.6}/></a> 

                </div> */}

              </div>

              <div className="linksPart flex">

                  <div className="linkHolder flex flex__column fritz">

                      <div className="linkHeader thick_500">Contact Us</div>

                      <div className='flex flex__column gap__30 badger'>

                        <a href = 'https://www.google.com/maps/place/Lagos+State+Government+Secretariat/@6.6131397,3.3584649,17z/data=!4m10!1m2!2m1!1shttps:%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%2FJ976%252B7C3%2BLagos%2BState%2BGovernment%2BSecretariat,%2BOregun,%2BIkeja%2B101233,%2BLagos%2F@6.613138,3.3198402,13z%2Fdata%3D*214m9*214m8*211m0*211m5*211m1*211s0x103b93b5de2d07a9:0xc0382f250b5ca65*212m2*211d3.361054*212d6.6131195*213e0%3Fentry%3Dttu%26g_ep%3DEgoyMDI0MDkwMy4wIKXMDSoASAFQAw%253D%253D!3m6!1s0x103b93b5de2d07a9:0xc0382f250b5ca65!8m2!3d6.6131397!4d3.3610398!15sCpcCaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2Rpci8vSjk3NiUyQjdDMytMYWdvcytTdGF0ZStHb3Zlcm5tZW50K1NlY3JldGFyaWF0LCtPcmVndW4sK0lrZWphKzEwMTIzMywrTGFnb3MvQDYuNjEzMTM4LDMuMzE5ODQwMiwxM3ovZGF0YT0hNG05ITRtOCExbTAhMW01ITFtMSExczB4MTAzYjkzYjVkZTJkMDdhOToweGMwMzgyZjI1MGI1Y2E2NSEybTIhMWQzLjM2MTA1NCEyZDYuNjEzMTE5NSEzZTA_ZW50cnk9dHR1JmdfZXA9RWdveU1ESTBNRGt3TXk0d0lLWE1EU29BU0FGUUF3JTNEJTNEIgOIAQGSARdzdGF0ZV9nb3Zlcm5tZW50X29mZmljZeABAA!16s%2Fg%2F1hhk6bhr7?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D' target='_Blank' className='flex font__14 gap__15 dark'> 

                            <div className="icon"> <MapPin/> </div> 

                            Block 4, The Lagos State Government Secretariat Complex, Alausa, Ikeja, Lagos. P.M.B. 21007, Ikeja 

                        </a>

                        <a href = 'mailto:health@lagosstate.gov.ng' target='_Blank' className='flex font__14 gap__15 dark'> 

                            <div className="icon"> <Mail/> </div> 

                            sto@lagosstate.gov.ng
                            
                        </a>

                        <a href = 'tel:234-1-4969061' target='_Blank' className='flex font__14 gap__15 dark'> 

                            <div className="icon"> <Phone/> </div> 

                            234-1-4969061
                            
                        </a>

                      </div>

                  </div>
                

                  <div className="linkHolder flex flex__column">

                      <div className="linkHeader thick_500">About sto</div>

                      <div className="links a-dark flex sublime">

                          <a target = '_blank' href="/about" className="link"> <span><ArrowUpRight/></span> Our Vision & Mission </a>

                          <a target = '_blank' href="/financial_statements" className="link"> <span><ArrowUpRight/></span> Financial Statement </a>

                          <a target = '_blank' href="/newsroom/1" className="link"> <span><ArrowUpRight/></span> Newsroom  </a>

                          <a target = '_blank' href="/connect" className="link"> <span><ArrowUpRight/></span> Connect </a>

                      </div>

                  </div>

              </div>

              <div className="footest_footer text__trend">

                  <div className="copyright flex flex__justify__spaceBetween">

                      <div className="txt">

                        © Copyright 2024, All Rights Reserved  |   Lagos State Government

                      </div>

                      <div className="txt text__trend col"><span>Powered by - </span> Lagos State Ministry of Innovation, Science and Technology</div>

                  </div>
                
              </div>

            </div>

            

        </Container>

    </div>

  )
}
