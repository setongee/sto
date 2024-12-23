import React, {useState, useEffect} from 'react'
import './news.scss'
import { useNavigate, useParams } from 'react-router'
import NewsComp from './NewsComp'
import { getAllNews } from '../../api/core/news.req'
import { useQuery } from '@tanstack/react-query'
import { NavArrowLeft, NavArrowRight } from 'iconoir-react'
import Loader from '../../components/loader/loader'
import Container from '../../components/container/Container'
import Pagination from '../../components/pagination/pagination'
import Footer from '../../components/footer/footerArea'

export default function News_Events() {

    let navigate = useNavigate();
    
    const {page} = useParams();
    const [size, setSize] = useState( { length : 0, pageCount : 0 } );
    const [newsCounter, setNewsCounter] = useState(0);
    
    const topic = "sto"
    
    const newsData = useQuery({

        queryKey: ["newsroom", page, topic],
        queryFn: () => getAllNews((Number(page - 1)), topic)

    })

    useEffect(() => {
        
       window.scroll(0,0);

       setSize({
        
        length : newsCounter,
        pageCount : parseInt(newsCounter / 20) + 1

      });

    }, [page, topic, newsCounter]);

    useEffect(() => {
        
        setNewsCounter(newsData?.data?.length);

    }, [newsData?.data]);


if (newsData.error) {

    console.log(newsData.error.message)
    return <div className="loaderPage"><Loader/></div>

}

if (newsData.isLoading) return <div className="loaderPage"><Loader/></div>

  return (
      
    <div className="news_body">

        <div className="news">

            <div className="news__show__body">

                <NewsComp data = {newsData.data?.data} topic = {topic} />

                {
                    newsData.data?.length > 1 ? <Pagination size = {size} page = {page} topic = {topic} /> : null
                } 

            </div>

        </div>  

        <Footer/>

    </div>

  )


}
