import React from 'react'
import { Navigation, LandingPage, AboutUs, Offer, Footer, Form, LifeCycle } 
    from '../components'

class HomePage extends React.Component {
    state = { imOnView : true }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                imOnView:false
            })
        }, 5000)
    }

    render(){
        return (<div className='page home-page' style={{padding:20}}>
            {this.state.imOnView && <LifeCycle data={[]}/>}
            {/*
            <Form/>
            <LandingPage/>
            <AboutUs/>
            <Offer/>
            <Footer/>
            */}
    </div>)
    }
    
}

export default HomePage