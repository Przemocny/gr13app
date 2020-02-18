import React from 'react'
import { Navigation, LandingPage, AboutUs, Offer, Footer, Form } 
    from '../components'

const HomePage = ()=>{
    return (<div className='page home-page'>
        <Navigation/>
        <Form/>
        {/*
        <LandingPage/>
        <AboutUs/>
        <Offer/>
        <Footer/>
        */}
    </div>)
}

export default HomePage