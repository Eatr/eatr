import React, { Component } from 'react'
import * as actionCreators from '../action-creators'
import {connect} from 'react-redux'

export default class Shortlist extends Component {
	constructor(props) {
		super(props)
	}

	handleClick(restaurant) {
		console.log('button clicked', restaurant)
	}

	render () {
		const shortlist = this.props.shortlist.restaurants
		console.log(shortlist)

		return (
			<main id='shortlist'>
			{
				shortlist.map((restaurant) => {
					return (
						<div	className="shortlist-restaurant">
							<img className="SL-item" src={restaurant.photo}/>
							<h6  className="SL-detail">{restaurant.name}</h6>
							<button ref={restaurant.name} className="SL-item remove-restaurant" onClick={()=>{this.handleClick(this.refs)}}>
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


