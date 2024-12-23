import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'

export default function Rrs() {

    const styles = {
        color : 'crimson',
        height : '10px',
        width : '1px',
        backgroundColor : '#fff'
    }


    const location = useLocation().pathname.split('/')[1]
    console.log(location)

    useEffect(() => {

    }, []);

  return (

    <div className="flex flex__align__center flex__justify__center padding__top__bottom_10 gap__15 button__main rrs" id = {`${location === "about" ? "fixed" : ''}`}>
        <a className='text__trend font__weight__600 font__10'> 🚀 We just launched our new website, Enjoy the new v2.0 experience </a>
    </div>

  )

}
