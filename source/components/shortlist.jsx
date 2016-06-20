import React, { Component } from 'react'
import * as actionCreators from '../action-creators'
import {connect} from 'react-redux'
import Navlink from './navlink.jsx'
import Navbar from './navbar.jsx'
import updateServer from '../helpers/update-server.js'
var Swipeable = require('react-swipeable')

export default class Shortlist extends Component {
	constructor(props) {
		super(props)
	}

	handleClick(restaurant) {
		updateServer(this.props.shortlist, restaurant, 'remove')
		this.props.removeFromShortList(restaurant.id)
	}

	showRestaurant(restaurant) {
		this.props.showRestaurant(restaurant)
	}


	render () {
		const shortlist = this.props.shortlist.restaurants

		return (
			<div>
				<Navbar/>
				<main id='shortlist'>
				{
					!(shortlist) ? null : shortlist.map((restaurant) => {
						return (
							<Swipeable  
								delta={50} 
								onSwipedLeft={	() => this.handleClick(restaurant) } >
								<div	className="shortlist-restaurant">
									<Navlink to="/">
										<img 
											className="SL-item" 
											src={restaurant.photo} 
											onClick={()=> this.showRestaurant(restaurant)}/>
									</Navlink>
									<h6  className="SL-detail">{restaurant.name}</h6>
									<button 
										className="SL-item remove-restaurant" 
										onClick={()=>{this.handleClick(restaurant)}}>
											Remove
									</button>
								</div>
						</Swipeable>)

					})
				}
				</main>
			</div>
		)
	}
}

const mapStateToProps =  (state) => {
  return {
    shortlist: state.ShortList
  }
}

export const ShortlistContainer = connect(
  mapStateToProps, 
  actionCreators
  )(Shortlist)


