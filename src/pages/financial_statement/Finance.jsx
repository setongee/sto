import React from 'react'
import './finance.scss'

import Container from '../../components/container/Container'

// fins

import fin_2023 from '../../assets/sto/fin_2023.png'
import fin_2022 from '../../assets/sto/fin_2022.png'
import fin_2021 from '../../assets/sto/fin_2021.png'
import fin_2019 from '../../assets/sto/fin_2019.png'
import fin_2018 from '../../assets/sto/fin_2018.png'
import fin_2017 from '../../assets/sto/fin_2017.png'
import fin_2016 from '../../assets/sto/fin_2016.png'
import fin_2015 from '../../assets/sto/fin_2015.png'


import Footer from '../../components/footer/footerArea'

export default function Finance() {

  return (

    <div className="finance">

        <Container>

            <div className="statement">

                <div className="title pageTitle">

                    Lagos' Financial Statements : Transparency, Insight, and Accountability

                </div>

                <div className="fin__downloads flex">
                
                    <div className="fin">
                        <img src={fin_2023} alt="" />
                    </div>

                    <div className="fin">
                        <img src={fin_2022} alt="" />
                    </div>

                    <div className="fin">
                        <img src={fin_2021} alt="" />
                    </div>

                    <div className="fin">
                        <img src={fin_2019} alt="" />
                    </div>

                    <div className="fin">
                        <img src={fin_2018} alt="" />
                    </div>

                    <div className="fin">
                        <img src={fin_2017} alt="" />
                    </div>

                    <div className="fin">
                        <img src={fin_2016} alt="" />
                    </div>

                    <div className="fin">
                        <img src={fin_2015} alt="" />
                    </div>

                </div>

            </div>

        </Container>

        <Footer/>

    </div>

  )

}
