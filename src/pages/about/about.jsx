import React,{useState, useEffect} from 'react'
import Container from '../../components/container/Container'
import './about.scss'
import ScrollSpy from "react-ui-scrollspy";
import { Cellar, City } from 'iconoir-react'
import '../../styles/card__ui.scss'
import '../../styles/gallery.scss'

// icons
import agency from '../../assets/MDA/agency.svg'
import dept from '../../assets/MDA/department.svg'
import units from '../../assets/MDA/ministry.svg'

//people
import Footer from '../../components/footer/footerArea';
import { getAdminData } from '../../api/core/admin';
import { convertToTitleCase } from '../../middleware/middleware';

export default function About() {

const[data, setData] = useState({})
const [agency, setAgency] = useState({});

useEffect(() => {

    getAdminData("sto")
    .then( res => {
        setData(res[0]);
        refixArr(res[0].agencies);
        addContent(res[0]?.responsibilities);
    } )

}, []);  

const refixArr = (q) => {

    const newObj = {};

    q.forEach(e => {
        
        if(!newObj[e.category]){

            newObj[e.category] = { name : e.category, data : [] }

        }

        newObj[e.category].data.push(e)

    });

    setAgency(newObj);

}

const addContent = (response) => {
    
    const content = document.getElementById('content');
    content.innerHTML = response;

}

  return (
    <div className="about">

        <div className="navigateMenu">

            <Container>

                <div className="spy__links">

                    <a href='#introduction' data-to-scrollspy-id="introduction"> Introduction </a>
                    <a href='#mission' data-to-scrollspy-id="mission"> Mission & Vision </a>
                    <a href='#agency' data-to-scrollspy-id="agency"> Agencies, Departments and Units </a>
                    <a href='#responsibility' data-to-scrollspy-id="responsibility"> Responsibilities </a>
                    <a href='#people' data-to-scrollspy-id="people"> Principal officers </a>

                </div>

            </Container>

        </div>
        
        <div className="about__contents">

            <Container>

                <ScrollSpy >

                    <section id="introduction" className='content'>

                        <div className="intro">

                        Discover the role, impact, and initiatives of Lagos State Treasury Office in driving financial excellence and growth.                        

                        </div>

                        <div className="pinna">//////////////////////////////////////////////////////////////////</div>

                        <div className="brief">

                            <div className="tab">Brief Introduction</div>
                            
                            <p>The Lagos State Treasury office is one of the three (3) arms of the   Ministry of Finance. The Office is also known and called the Accountant General’s Office. This Office has been in existence since the establishment of the Ministry of Finance in 1968.</p>
                        </div>

                    </section>

                    <section id="mission">

                        <div className="bubble"> 

                            <div className="headUp">Vision Statement</div>

                            <p className='tube'> { data?.vision } </p>

                        </div>

                        <div className="bubble"> 

                            <div className="headUp">Mission Statement</div>

                            <p> {data?.mission} </p>

                        </div>

                    </section>

                    <div id="agency">
            
                        {
                            Object.entries(agency).map( (e, index) => (

                                <section id={ e[0] === "department" ? "directorates" : e[0] } className = "multi" key = {index}>

                                    <h1> {e[0]} </h1>

                                    <div className="mda__card__ui flex gap__20">

                                        {
                                            e[1].data.map( (res, index) => (

                                                <div className="mda__card" key = {index}>

                                                    <div className="iconHolder">

                                                        <div className="card__photo">
                                                            <img src = {dept} />
                                                        </div>

                                                    </div>

                                                    <div className="card__content">

                                                    <p>{res.name}</p>
                                                    <span> <Cellar/> {e[0]} </span>
                                                        
                                                    </div>

                                                </div>
                                            ) )
                                        }

                                    </div>

                                </section>

                            ) )
                        }
                        
                    </div>

                    <div id="responsibility">

                        <div className="titlePin">
                            Roles and Responsibilities: Understanding Core Functions, Duties, and Key Roles
                        </div>

                        <div className="resp__body">

                            <div className="body__list" id='content'></div>

                        </div>

                        

                    </div>

                    <div id="people">

                        <div className="titlePin">
                            Meet the Team: Passionate People Driving Success and Innovation Forward
                        </div>

                        <div className="gallery__mda gallx">

                            <section>

                                {
                                    data.people?.length ? data.people.map( (res, index) => (

                                        <a className="pic" key = {index} >

                                            <div className="pic__holder">
                                                <img src={res.photo} alt= { `${res.name}_${res.role}` } />
                                            </div>

                                            <div className="name__card">
                                                <span> {res.role} </span>
                                                <p> { convertToTitleCase( res.name ) } </p>
                                            </div>

                                        </a>

                                    ) ) : null
                                }

                            </section>

                        </div>

                    </div>

                </ScrollSpy>

            </Container>

        </div>

        <Footer/>

    </div>
  )
}
