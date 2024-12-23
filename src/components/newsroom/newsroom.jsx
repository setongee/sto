import React, {useEffect, useState} from 'react'
import './newsroom.scss'
import Button from '../button/Button'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'iconoir-react'
import { useQuery } from '@tanstack/react-query'
import { getAllNews } from '../../api/core/news.req'
import { convertToTitleCase, formatDate2 } from '../../middleware/middleware'
import Container from '../container/Container'

export default function Newsroom({type}) {
    
    const [news, setNews] = useState([])
    const topic = "sto"
    const {data, isLoading} = useQuery({

        queryKey: ["newsroom", 1, topic],
        queryFn: () => getAllNews(0, topic)

    })

    useEffect(() => {
        
       if (type === "main") {
        
        setNews(data?.data);
        
       } else {
        const filteredArr = data?.data.filter( (res, index) => {
            return index < 5
           } )
    
           setNews(filteredArr);
       }

    }, [isLoading]);

  return (

    <div className="newsroom" id = {type} >
        
        <Container>

            <div className="tag__title flex__combo__align__spacebtw">

                <div className="font__32 font__weight__600 blog margin__top__10"> Trending Topics </div>

                {
                    type === 'main' || !news?.length ? null
                    :
                    <div className="controls flex gap__15"> 
                        <div className="controls__btn prev cursor__pointer"> <ArrowLeft/> </div> 
                        <div className="controls__btn next cursor__pointer"> <ArrowRight/> </div> 
                    </div>
                }

                </div>

                {/* news items */}

                <div className="news flex" id = {type}>

                {
                    news?.length ? 
                    news?.map( e => (

                        <a href={`/newsroom/view/${e._id}`}
                        className="news__item" key = {e._id}>

                            <div className="photo">

                                <img src={e.photo} alt="images" />
                                
                            </div>

                            <div className="content__text font__16 font__weight__600">

                            <p className="published"> { formatDate2( e.date ) } </p>

                            <p> { convertToTitleCase(e.title) } </p>

                            </div>

                        </a>

                    ) ) : <p className='empty__tray'> Oops! No news found! </p>
                }

            </div>

        </Container>

    </div>

  )

}
