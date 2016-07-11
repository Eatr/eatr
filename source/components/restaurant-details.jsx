import React from 'react'


export default ({name, website, phone, address}) => {
	return 	(<div id="rest-details">
				<h6 id="long-heading">About {name}</h6>
				<p><a href={website}>Website</a></p>
				<p>{phone}</p>
				<p>{address}</p>
			</div>
	)
}










