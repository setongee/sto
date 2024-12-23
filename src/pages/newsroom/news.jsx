import React from 'react'
import Container from '../../components/container/Container'
import Newsroom from '../../components/newsroom/newsroom'
import Footer from '../../components/footer/footerArea'

export default function News() {

  return (

    <section className='fullscreen'>

        <Container>

            <Newsroom type = 'main' />

        </Container>

        <Footer/>

    </section>

  )

}
