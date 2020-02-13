import React, { Component } from 'react'

class Navigation extends Component{

	state = {
		isMenuOpen:false,
		isMenuSticked:false
	}

	toggleMenu = () => {
		// to jest dobrze
		const { isMenuOpen } = this.state
		this.setState({
			isMenuOpen:!isMenuOpen
		})
	}

	componentDidMount(){
		window.addEventListener('scroll',(ev)=>{
		  if(window.scrollY >= 150){
			if(!this.state.isMenuSticked){
			  this.setState({
				isMenuSticked:true
			  })
			}
		  }
		  else{
			this.setState({
			  isMenuSticked:false
			})
		  }
		})
	}

	render(){
		const { isMenuOpen, isMenuSticked } = this.state
		const { toggleMenu } = this

		return (
			<nav className="menu-wrapper">
				{/* to jest zawsze ponizej 768px */}
				<div className={
					['menu-container-mobile', 
					isMenuSticked ? "sticked" : ""].join(' ')}>
					<div className="menu-brand">
						<h1>nazwa firmy</h1>
					</div>
	
					<div className="menu-toggler">
						<a onClick={toggleMenu} >click</a>
					</div>
	
					{isMenuOpen && <div className='menu-elems'>
						<a href='#about-us'>o nas</a>
						<a href='#offer'>oferta</a>
						<a href='#'>kontakt</a>
					</div>}
				</div>
	
				{/* to jest zawsze powyzej 768px */}
				<div className='menu-container'>
					<div className="menu-brand">
						<h1>nazwa firmy</h1>
					</div>
	
					<div className='menu-elems'>
						<a href='#about-us'>o nas</a>
						<a href='#offer'>oferta</a>
						<a href='#'>kontakt</a>
					</div>
				</div>
			</nav>
		)
	}
}


export default Navigation