import React from 'react'

class LCComponent extends React.Component{
    timer = null
    state = { name: 'value' }



    customMethod = () => {
        // this.state
    }

    // static getDerivedStateFromProps(props, state){
    // }

    render(){
        // nie wolno robić - obliczeń
        
        return 'string'
    }

    componentDidMount(){
        // obliczenia !
        // async - http, setInterval, socket
        // zmiany stanu
        this.timer = setInterval(()=>{
            console.log('tick')
        },1000)
    }


    shouldComponentUpdate(nextProps, nextState){
        return true
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

}

export default LCComponent