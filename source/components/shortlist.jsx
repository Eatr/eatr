import React, { Component } from 'react'
import * as actionCreators from '../action-creators'
import {connect} from 'react-redux'

export default class Shortlist extends Component {
	constructor(props) {
		super(props)
	}

	render () {
		const shortlist = this.props.shortlist.restaurants
		return (<p>Hello this is shortlist. </p>)
	}
}







function mapStateToProps (state) {
  return {
    shortlist: state.ShortList
  }
}

export const ShortlistContainer = connect(
  mapStateToProps, 
  actionCreators
  )(Shortlist)


