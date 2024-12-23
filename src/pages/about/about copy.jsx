import React from 'react'
import Container from '../../components/container/Container'
import './about.scss'
import ScrollSpy from "react-ui-scrollspy";
import { Cellar, City } from 'iconoir-react'
import '../../styles/card__ui.scss'
import '../../styles/gallery.scss'

export default function About() {
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

                <ScrollSpy>

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

                            <p className='tube'>To be the best public sector financial service provider and a citadel for financial professionals. </p>

                        </div>

                        <div className="bubble"> 

                            <div className="headUp">Mission Statement</div>

                            <p>To provide world class financial services to the stakeholders through IT driven processes with seasoned professionals working in a conducive environment. </p>

                        </div>

                    </section>

                    <div id="agency">

                        <div className="titlePin">
                            Explore Agencies, Departments and Units in this Office
                        </div>

                        <section id="directorates" className = "multi" >

                            <h1>Departments</h1>

                            <div className="mda__card__ui flex gap__20">

                                <div className="mda__card">

                                    <div className="card__photo">
                                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                                    </div>

                                    <div className="card__content">
                                    <p> Treasury Operations Directorate (TO)</p>
                                    <span> <Cellar/> Directorates</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="card__photo">
                                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                                    </div>

                                    <div className="card__content">
                                    <p>Monitoring and Investigation Directorate (M&I)</p>
                                    <span> <Cellar/> Directorates</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="card__photo">
                                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                                    </div>

                                    <div className="card__content">
                                    <p>Financial Information System Directorate (FIS)</p>
                                    <span> <Cellar/> Directorates</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="card__photo">
                                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                                    </div>

                                    <div className="card__content">
                                    <p> Financial Intelligence and Research Directorate (FIR)</p>
                                    <span> <Cellar/> Directorates</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="card__photo">
                                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                                    </div>

                                    <div className="card__content">
                                    <p>Central Payroll and Data Validation Directorate (CPDVD)</p>
                                    <span> <Cellar/> Directorates</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="card__photo">
                                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                                    </div>

                                    <div className="card__content">
                                    <p> Finance and Accounts Directorate (F&A)</p>
                                    <span> <Cellar/> Directorates</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="card__photo">
                                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                                    </div>

                                    <div className="card__content">
                                    <p>  Administration and Human Resources (A&HR)</p>
                                    <span> <Cellar/> Directorates</span>
                                    </div>

                                </div>

                            </div>

                            </section>

                            <section id="units" className = "multi" >

                            <h1>Units</h1>

                            <div className="mda__card__ui flex gap__20">

                                <div className="mda__card">

                                    <div className="card__photo">
                                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                                    </div>

                                    <div className="card__content">
                                    <p>Procurement Unit </p>
                                    <span> <City/> Units</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="card__photo">
                                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                                    </div>

                                    <div className="card__content">
                                    <p>Information and Communication Technology Unit (ICT)Unit</p>
                                    <span> <City/> Units</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="card__photo">
                                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                                    </div>

                                    <div className="card__content">
                                    <p>Budget and Planning Unit</p>
                                    <span> <City/> Units</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="card__photo">
                                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                                    </div>

                                    <div className="card__content">
                                    <p>Reconciliation Unit</p>
                                    <span> <City/> Units</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="card__photo">
                                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                                    </div>

                                    <div className="card__content">
                                    <p>Public Affairs Unit  </p>
                                    <span> <City/> Units</span>
                                    </div>

                                </div>

                                <div className="mda__card">

                                    <div className="card__photo">
                                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                                    </div>

                                    <div className="card__content">
                                    <p> Internal Audit Unit </p>
                                    <span> <City/> Units</span>
                                    </div>

                                </div>

                                 <div className="mda__card">

                                    <div className="card__photo">
                                    <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/03/hsc.jpg" alt="Lagos State Health Service Commission" />
                                    </div>

                                    <div className="card__content">
                                    <p> Projects’ Financial Management Unit </p>
                                    <span> <City/> Units</span>
                                    </div>

                                </div>


                                

                            </div>

                        </section>
                        
                    </div>

                    <div id="responsibility">

                        <div className="titlePin">
                            Roles and Responsibilities: Understanding Core Functions, Duties, and Key Roles
                        </div>

                        <div className="resp__body">

                            <div className="summary">The Statutory responsibilities of the State Treasury Office as stated in the Public Finance Management Law 2011 include the following major services amongst others: </div>

                            <div className="body__list">

                                <ol>
                                    <li>Accounting for all receipts and payments of the State Government.</li>
                                    <li>Supervising the accounts of the State Ministries, Extra-Ministerial  Departments and Agencies (MDAs);</li>
                                    <li>Maintaining and operating the accounts of the Consolidated Revenue Fund, Capital Development Fund and other Public Funds and providing cash backing for the operations of the State Government;</li>
                                    <li>Collating and preparing statutory Financial Statements of the State Government and any other Statement of Accounts as may be required from time to time;</li>
                                    <li>Maintaining and operating the State Government’s Accounts;</li>
                                    <li>Conducting routine and in-depth inspection of the books of accounts of the State’s Ministries, Department and Agencies to ensure compliance with rules, regulations, policy decisions and maintenance of account codes;</li>
                                    <li>Formulating and implementing the accounting policies of the State Government.</li>
                                </ol>

                            </div>

                        </div>

                    </div>

                    <div id="people">

                        <div className="titlePin">
                            Meet the Team: Passionate People Driving Success and Innovation Forward
                        </div>

                        <div className="gallery__mda gallx">

                            <section>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://sto.lagosstate.gov.ng/wp-content/uploads/sites/228/2023/11/avv.jpg" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>Permanent Secretary/Accountant-General</span>
                                        <p>Dr. Abiodun Shefiu Muritala</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://sto.lagosstate.gov.ng/wp-content/uploads/sites/228/2023/09/tifas.jpg" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>Director, Centralized Payroll& Data Validation
                                        </span>
                                        <p>Mrs. Tifase Iyabo Olayinka</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://sto.lagosstate.gov.ng/wp-content/uploads/sites/228/2023/09/pfm.jpg" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>Director, Project Financial Management Unit</span>
                                        <p>Mrs. Saidi Rasheedat A.</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://sto.lagosstate.gov.ng/wp-content/uploads/sites/228/2023/09/shobo.jpg" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>Director, Admin. & Human Resource Department</span>
                                        <p>Ms.Shobowale Adedoyin Sekinot</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://sto.lagosstate.gov.ng/wp-content/uploads/sites/228/2023/09/Stoh.jpg" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>DIRECTOR, FINANCIAL INFORMATION SYSTEM</span>
                                        <p>MR. Thomas Folorunsho Olatunji</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://sto.lagosstate.gov.ng/wp-content/uploads/sites/228/2017/02/Capture.png" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>DIRECTOR, MONITORING & INVESTIGATION DIRECTORATE</span>
                                        <p>MR. Mahmud Tajudeen Alao</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://sto.lagosstate.gov.ng/wp-content/uploads/sites/228/2023/09/kara.jpg" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>Director, Finance and Accounts</span>
                                        <p>Kara Oluseun Olumayowa</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://sto.lagosstate.gov.ng/wp-content/uploads/sites/228/2023/09/dina.jpg" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>Director ,Treasury Operations</span>
                                        <p>Mrs. Abisola Ameenat Dina</p>
                                    </div>

                                </a>

                                <a href='#' className="pic">

                                    <div className="pic__holder">
                                        <img src="https://sto.lagosstate.gov.ng/wp-content/uploads/sites/228/2023/09/frt.jpg" alt="" />
                                    </div>

                                    <div className="name__card">
                                        <span>Director, Financial Intelligence and Research</span>
                                        <p>Mr. Viavo Oladipupo Amosu</p>
                                    </div>

                                </a>

                            </section>

                        </div>

                    </div>

                </ScrollSpy>

            </Container>

        </div>

    </div>
  )
}
