import React, { Component } from 'react'
import * as actionCreators 	from '../action-creators'
import {connect} 						from 'react-redux'
import Navlink 							from './navlink.jsx'
import Navbar 							from './navbar.jsx'
import updateServer 				from '../helpers/update-server.js'
import Swipeable 						from 'react-swipeable'

export class Shortlist extends Component {
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
		this.props.history.push('/')
	}


	render () {
		const shortlist = this.props.shortlist.restaurants
		if (shortlist.length===0) {
			
			return (
				<div>
					<Navbar/>
					<main id='shortlist'>
						<p id="SL-empty-message">Nothing in your shorty yet</p>
					</main>
				</div>
				)
		} else {			return (
				<div>
					<Navbar/>
					<main id='shortlist'>
					{shortlist.map((restaurant) => {
						return (
							<Swipeable
								delta={50}
								onSwipedLeft={() => this.handleClick(restaurant)}
							>
								<div	className="shortlist-restaurant">
									<button 
										id="nope" 
										onClick={()=>{this.handleClick(restaurant)}}>
										<img className="yeahnah-button" src="./images/nope.png" alt="nope"/>
									</button>
									
										<p 
										onClick={() => {this.showRestaurant(restaurant)}} 
										className="SL-detail">
											{restaurant.name}
										</p>
										
								
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


