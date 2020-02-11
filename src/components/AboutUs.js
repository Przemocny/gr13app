import React from 'react'
const firstImage = require('../image/firstempolyee.jpg')
const secondImage = require('../image/secondemployee.jpg')

const people = [
    {
        fullName:'Elon Musk',
        department:'Rockets',
        image:firstImage,
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.`
    },{
        fullName:'Bill Gates',
        department:'IT',
        image:secondImage,
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.`
    }
]

const SinglePerson = ({fullName, image, department, description})=>{
    return (<div className='employee'>
        <div className="employee-image">
            <img src={image}/>
        </div>
        <div className='about-employee-text'>
            <h2>{fullName} [ {department} ]</h2>
            <p>
                {description}
            </p>
        </div>
    </div>)
}

const AboutUs = () => {
	return (
		<section className='about-us' id='about-us'>
			<div className='container'>
				<h1>Nasi specjaliści</h1>
                {people.map((element, key)=>{
                    return <SinglePerson {...element} key={key}/>
                })}
			</div>
		</section>
	)
}

export default AboutUs
