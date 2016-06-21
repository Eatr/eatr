import React from 'react'


export default ({website, phone, address}) => {
	return 	(<div id="rest-dist">
				<h6><a href={website}>Website</a></h6>
				<h6>{phone}</h6>
				<h6>{address}</h6>
			</div>
	)
}










