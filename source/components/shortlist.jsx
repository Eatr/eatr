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
		this.props.user.name ? 
			updateServer(this.props.shortlist, restaurant, 'remove') :
    	null
		this.props.removeFromShortList(restaurant.id)
	}

	showRestaurant(restaurant) {
		this.props.showRestaurant(restaurant)
	}


	render () {
		const shortlist = this.props.shortlist.restaurants
		if (shortlist.length===0) {
			console.log('nothing in shortlist')
			return (
				<div>
					<Navbar/>
					<main id='shortlist'>
						<p>Nothing in your shorty yet</p>
					</main>
				</div>
				)
		} else {
			return (
				<div>
					<Navbar/>
					<main id='shortlist'>
					{shortlist.map((restaurant) => {
						return (
							<Swipeable
							delta={50}
							onSwipedLeft={() => this.handleClick(restaurant)}>
							<div	className="shortlist-restaurant">
								<Navlink to="/">
									<img 
										className="SL-item" 
										src={restaurant.photo} 
										onClick={()=> this.showRestaurant(restaurant)}/>
								</Navlink>
								<h3  className="SL-detail">{restaurant.name}</h3>
								<button 
									className="SL-item remove-restaurant" 
									onClick={()=>{this.handleClick(restaurant)}}>
										Remove
								</button>
							</div>
						</Swipeable>
						)
					})}	
					</main>
				</div>)
		}
	}
}

const mapStateToProps =  (state) => {
  return {
    shortlist: state.ShortList,
    user: state.User
  }
}

export const ShortlistContainer = connect(
  mapStateToProps, 
  actionCreators
  )(Shortlist)


