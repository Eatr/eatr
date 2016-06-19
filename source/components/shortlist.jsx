import React, { Component } from 'react'
import * as actionCreators from '../action-creators'
import {connect} from 'react-redux'
import Navlink from './navlink.jsx'

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
			<main id='shortlist'>
			{
				!(shortlist) ? "" : shortlist.map((restaurant) => {
					return (
						<div	className="shortlist-restaurant">
							<Navlink to="/"><img className="SL-item" src={restaurant.photo}
								onClick={()=> this.showRestaurant(restaurant)}
							/></Navlink>
							<h6  className="SL-detail">{restaurant.name}</h6>
							<button className="SL-item remove-restaurant" onClick={()=>{this.handleClick(restaurant.id)}}>
								Remove
							</button>
						</div>)
				})
			}
			</main>
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


