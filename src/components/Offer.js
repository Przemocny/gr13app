import React from 'react'

const offers = [
	{
		title: 'Usługa 1',
		isOfferNew: true,
	},
	{
		title: 'Usługa 2',
		isOfferNew: false,
	},
	{
		title: 'Usługa 3',
		isOfferNew: false,
	},
	{
		title: 'Usługa 4',
		isOfferNew: false,
	},
	{
		title: 'Usługa 5',
		isOfferNew: false,
	},
	{
		title: 'Usługa 6',
		isOfferNew: false,
	},
]

const SingleOffer = ({ title, isOfferNew }) => {
	if (isOfferNew) {
		return (
			<div className='box'>
				<div className='dot' />
				<div className='content'>
					<h3>{title}</h3>
					<span>(nowość)</span>
				</div>
			</div>
		)
	} else {
		return (
			<div className='box'>
				<div className='content'>
					<h3>{title}</h3>
				</div>
			</div>
		)
	}

	// return (
	// 	<div className='box'>
	// 		{isOfferNew && <div className='dot' />}
	// 		<div className='content'>
	// 			<h3>{title}</h3>
	// 			{isOfferNew && <span>(nowość)</span>}
	// 		</div>
	// 	</div>
	// )
}

const Offer = () => {
	return (
		<section className='offer' id='offer'>
			<div className='container'>
				<h1>Czym zajmuje się nasza firma?</h1>
				<div className='offer-boxes'>
					{offers.map((element, key) => {
						return <SingleOffer {...element} key={key} />
					})}
				</div>
			</div>
		</section>
	)
}

export default Offer
