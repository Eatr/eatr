import React, { Component } from 'react'
import * as actionCreators from '../action-creators'
import {connect} from 'react-redux'

export default class Shortlist extends Component {
	constructor(props) {
		super(props)
	}

	handleClick(restaurantId) {
		console.log(this.props)
		this.props.removeFromShortList(restaurantId)
	}

	render () {
		const shortlist = this.props.shortlist.restaurants

		return (
			<main id='shortlist'>
			{
				!(shortlist) ? "" : shortlist.map((restaurant) => {
					return (
						<div	className="shortlist-restaurant">
							<img className="SL-item" src={restaurant.photo}/>
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


