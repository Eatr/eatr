import React, { Prop } from 'react'

export default ({state, store}) => {
	console.log(state, "state in restaurant")
	return (
		<div id="restaurant-container">
			<img src={state.photo} />
			<div className="restaurant-details-container">
				<h3 className="restaurant-details-short">{state.name}</h3>
				<p className="restaurant-details-long"></p>
			</div>

		</div>


		)


} 