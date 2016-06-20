import React, { Component } from 'react'
import * as actionCreators from '../action-creators'
import {connect} from 'react-redux'
import Navlink from './navlink.jsx'
import Navbar from './navbar.jsx'

var Swipeable = require('react-swipeable')

export default class Shortlist extends Component {
	constructor(props) {
		super(props)
	}

	handleClick(restaurantId) {
		console.log(this.props)
		this.props.removeFromShortList(restaurantId)
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
					!(shortlist) ? "" : shortlist.map((restaurant) => {
						return (
							<Swipeable  delta={50} onSwipedLeft={	() => this.handleClick(restaurant.id) } >
								<div	className="shortlist-restaurant">
									<Navlink to="/">
										<img className="SL-item" src={restaurant.photo} onClick={()=> this.showRestaurant(restaurant)}/>
									</Navlink>
									<h3  className="SL-detail">{restaurant.name}</h3>
									<button className="SL-item remove-restaurant" onClick={()=>{this.handleClick(restaurant.id)}}>
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


