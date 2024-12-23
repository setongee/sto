import React from 'react'
import './resources.scss'
import Container from '../../components/container/Container'
import pdf from '../../assets/pdff.png'
import Button from '../../components/button/Button'
import { ArrowSeparate, ArrowSeparateVertical, Download, DownloadCircle } from 'iconoir-react'
import Footer from '../../components/footer/footerArea'

//pdf

import fin_2023 from '../../assets/pdf/YEAR-2023-FINANCIAL-STATEMENT.pdf'
import fin_2022 from '../../assets/pdf/Y2022-Lagos-State-Financial-Statement-1.pdf'
import fin_2021 from '../../assets/pdf/Lagos_State_2021_Accountant-Generals-Report_compressed.pdf'
import fin_2020 from '../../assets/pdf/Lagos_State_2020_Accountant-Generals-Report.pdf'
import fin_2019 from '../../assets/pdf/Lagos_State_2019_Accountant-Generals-Report.pdf'
import fin_2018 from '../../assets/pdf/Lagos_State_2018_Accountant-Generals-Report.pdf'
import fin_2017 from '../../assets/pdf/Lagos_State_2017_Accountant-Generals-Report.pdf'
import fin_2016 from '../../assets/pdf/Lagos_State_2016_Accountant-General39s-Report.pdf'
import fin_2015 from '../../assets/pdf/Lagos_State_2015_Accountant-Generals-Report.pdf'

export default function Resources() {
  return (

    <div className="resources">
       
        <Container>

            <div className="pageTitle">Lagos' Financial Statements : Transparency, Insight, and Accountability (2015 - date)</div>

            <div className="vault">

                <div className="doc doc__top">
                    <div className="doc__title flex gap__20"># Resource Title  <ArrowSeparateVertical/> </div>
                    <div className="doc__category flex gap__20">Category <ArrowSeparateVertical/></div>
                    <div className="doc__date flex gap__20">Last Updated <ArrowSeparateVertical/></div>
                    <div className="doc__action">Action</div>
                </div>

                <a href = {fin_2023} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Y2023 Lagos Audited Financial Statement 
                    
                    </div>
                    <div className="doc__category"> Financial Statements </div>
                    <div className="doc__date"> 31st December 2023 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {fin_2022} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Y2022 Lagos Audited Financial Statement 
                    
                    </div>
                    <div className="doc__category"> Financial Statements </div>
                    <div className="doc__date"> 31st December 2022 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {fin_2021} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Y2021 Lagos Audited Financial Statement 
                    
                    </div>
                    <div className="doc__category"> Financial Statements </div>
                    <div className="doc__date"> 31st December 2021 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {fin_2020} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Y2020 Lagos Audited Financial Statement 
                    
                    </div>
                    <div className="doc__category"> Financial Statements </div>
                    <div className="doc__date"> 31st December 2020 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {fin_2019} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Y2019 Lagos Audited Financial Statement 
                    
                    </div>
                    <div className="doc__category"> Financial Statements </div>
                    <div className="doc__date"> 31st December 2019 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {fin_2018} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Y2018 Lagos Audited Financial Statement 
                    
                    </div>
                    <div className="doc__category"> Financial Statements </div>
                    <div className="doc__date"> 31st December 2018 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {fin_2017} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Y2017 Lagos Audited Financial Statement 
                    
                    </div>
                    <div className="doc__category"> Financial Statements </div>
                    <div className="doc__date"> 31st December 2017 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {fin_2016} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Y2016 Lagos Audited Financial Statement 
                    
                    </div>
                    <div className="doc__category"> Financial Statements </div>
                    <div className="doc__date"> 31st December 2016 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {fin_2015} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Y2015 Lagos Audited Financial Statement 
                    
                    </div>
                    <div className="doc__category"> Financial Statements </div>
                    <div className="doc__date"> 31st December 2015 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>
                

            </div>

        </Container>

        <Footer/>

    </div>

  )
}
