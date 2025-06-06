import React, {useEffect, useState} from 'react'
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
import { getAdminData } from '../../api/core/admin'
import { sortArray } from '../../middleware/middleware'

export default function Resources() {

    const[data, setData] = useState([])

    useEffect(() => {
    
        getAdminData("sto")
        .then( res => {
            
            sortArray(res[0].resources, "name")
            .then(e => {
                const response = e.toReversed();
                setData(response)
            })

        } )

        const sp = "Y2024 Finacial Planning"
        const y = sp.split("")
        console.log(y);
        console.log(y[4]);
    
    }, []); 
    
    const convertDateUploaded = (name) => {

        const ccName = name.split("");
        const newArrayStr = [Number(ccName[1]), Number(ccName[2]), Number(ccName[3]), Number(ccName[4]) ];
        const response = newArrayStr.join("");
        
        return response - 1

    }
        

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

                {
                    data?.length ? (

                        data?.map( item => (

                            <a key = {item.name} href = {item.url} target = "_blank" download className="doc doc__body">

                                <div className="doc__title flex gap__10">
                                    
                                    <div className="doc__icon"><img src={pdf} alt="" /></div>
                                    
                                    {item.name}
                                
                                </div>
                                <div className="doc__category"> Financial Statements </div>
                                <div className="doc__date"> 31st December { convertDateUploaded(item.name) }  </div>
                                <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                                
                            </a>

                        ) )

                    ) : null
                }
                

            </div>

        </Container>

        <Footer/>

    </div>

  )
}
