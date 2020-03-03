import React, {useState, useEffect, Component} from 'react'


class Toggler extends Component{
    state = { isOpen:false }
    toggle = ()=>{
        this.setState({ isOpen:!this.state.isOpen })
    }
    render(){
        const {isOpen} = this.state
        return <a onClick={this.toggle}>
            {isOpen && <div>toggler</div>}
        </a>
    }
}

const HookToggler = ()=>{
    const [isOpen, toggle] = useState(false)
    return <a onClick={()=>{toggle(!isOpen)}}>
        {isOpen && <div>toggler</div>}
    </a>
}


class AsyncLoader extends Component{
    state = { data:[] }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({ data:[1,2,3,4] })
        },5000)
    }
    render(){
        const {data} = this.state
        return <div>{JSON.stringify(data)}</div>
    }
}

const HookAsyncLoader = ({anotherData})=>{
    const [data, setData] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            setData([1,2,3,4])
        },5000)
    },[data])

    useEffect(()=>{
        setTimeout(()=>{
            setData([1,2,3,4])
        },5000)
    },[anotherData])
    return <div>{JSON.stringify(data)}</div>
}
