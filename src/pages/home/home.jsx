import React from 'react'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import './home.scss'
import stat from '../../assets/landing/stats.png'

// fins

import fin6 from '../../assets/fin/6.png'
import fin1 from '../../assets/fin/1.png'
import fin2 from '../../assets/fin/2.png'
import fin3 from '../../assets/sto/fin_2021.png'
import fin4 from '../../assets/sto/fin_2019.png'
import fin5 from '../../assets/sto/fin_2018.png'

// pdf downloads
import fin_2023 from '../../assets/pdf/YEAR-2023-FINANCIAL-STATEMENT.pdf'
import fin_2022 from '../../assets/pdf/Y2022-Lagos-State-Financial-Statement-1.pdf'
import fin_2021 from '../../assets/pdf/Lagos_State_2021_Accountant-Generals-Report_compressed.pdf'
import fin_2019 from '../../assets/pdf/Lagos_State_2019_Accountant-Generals-Report.pdf'
import fin_2018 from '../../assets/pdf/Lagos_State_2018_Accountant-Generals-Report.pdf'

import Newsroom from '../../components/newsroom/newsroom'
import Footer from '../../components/footer/footerArea'

export default function Home() {
  return (
    <div className="home">

        <Container>

            <div className="landing__area">

                <div className="text__part">
                    <span className='sto'>State Treasury Office (STO)</span>
                    <h1><span>Strengthening Lagos' Growth with</span> Financial Stewardship</h1>
                    <p>Committed to responsible financial management, enhancing transparency, and fostering sustainable growth to secure a prosperous future for all Lagosians.</p>
                    <Button content  = 'Discover More' type = 'button__main' arrow = {true} arrow__type='down' to = "#fin" />
                </div>

                <div className="stoPic">
                    <img src={stat} alt="" />
                </div>

            </div>

            <div className="fin__statements" id='fin'>

                <div className="heading"> Lagos' Financial Statements</div>

                <div className="fin__downloads flex">

                    <a href="https://firebasestorage.googleapis.com/v0/b/lasg-a9f5c.appspot.com/o/uploads%2Fsto%2FY2024%20Lagos%20Audited%20Financial%20Statement?alt=media&token=4c7ebaff-29a6-4df6-b3b4-997ed6b8994d" target='_blank' download className="fin">
                        <img src={fin6} alt="" />
                    </a>

                    <a href={fin_2023} download className="fin">
                        <img src={fin1} alt="" />
                    </a>

                    <a href={fin_2022} download className="fin">
                        <img src={fin2} alt="" />
                    </a>

                    <a href={fin_2021} download className="fin">
                        <img src={fin3} alt="" />
                    </a>

                    <a href={fin_2019} download className="fin">
                        <img src={fin4} alt="" />
                    </a>

                    <a href={fin_2018} download className="fin">
                        <img src={fin5} alt="" />
                    </a>

                </div>

            </div>

        </Container>

        <Newsroom/>

        <Footer/>

    </div>
  )
}
