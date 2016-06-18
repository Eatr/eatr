import React, { Prop } from 'react'

export default ({state, store}) => {
	console.log(state, "state in restaurant")
	return (
		<div id="restaurant-container">
			<img src="" />
			<div className="restaurant-details-container">

				<p className="restaurant-details-short">This is rest detail short in the restaurant component</p>
				<p className="restaurant-details-long"></p>
			</div>

		</div>


		)


} 