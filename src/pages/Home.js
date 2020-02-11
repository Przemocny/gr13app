import React from 'react'
import { Navigation, LandingPage, AboutUs, Offer, Footer } 
    from '../components'

const HomePage = ()=>{
    return (<div className='page home-page'>
        <Navigation/>
        <LandingPage/>
        <AboutUs/>
        <Offer/>
        <Footer/>
    </div>)
}

export default HomePage