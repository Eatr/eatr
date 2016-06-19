import React from 'react'


export default ({website, phone, address}) => {
	return 	(<ul id="restaurant-detailed">
				<li><a href={website}>Website</a></li>
				<li>{phone}</li>
				<li>{address}</li>
			</ul>
	)
}










