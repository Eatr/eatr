
import path 					  from  'path'
import express 				  from  'express'
import session     		  from  'express-session'
import passport         from  'passport'
import Passport         from  './passport.js'
import getRestaurants   from  './get-restaurants.js'

import {restaurantArray, newRestaurantArray}  from '../source/helpers/restaurant-test-array.js'

import Knex             from  'knex'
import knexConfig       from  '../knexfile.js'
import User             from '../db/user-functions.js'

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])
const {findUser, editUser} = User(knex)

export default () => {

  const app = express()

  app.use(express.static(path.join(__dirname, '../public')))
  app.use(require('cookie-parser')())
  app.use(require('body-parser').urlencoded({ extended: true }))


  Passport(app,passport)

  app.get('/', function (req, res) {
    res.sendFile('../public/index.html')
  })

  app.get('/username', function (req, res) {
    if (!req.session.passport) {
      res.json([])
    } else {
      return findUser(req.session.passport.user.id)
        .then(user => res.json(user))
    }
  })

  app.get('/restaurants/:lat/:lon/:rad', (req, res) => {
   
    // getRestaurants(req.params.lat, req.params.lon, req.params.rad)
    // .then((data) => {

      res.json(restaurantArray)
    // })
  
  })

  app.get('/nextpage/:lat/:lon/:token', (req, res) => {
    
    // getRestaurants(req.params.lat, req.params.lon, null, req.params.token)
    // .then((data) => {
   
      res.json(newRestaurantArray)
    // })
  
  })

  app.post('/update-shortlist/', (req, res) => {
    const [user, shortlist] = [req.session.passport.user, {shortlist: req.headers.data}]
    return editUser(user,shortlist)
      then((dbResponse) => {
        res.json(dbResponse)
      })
})

  app.listen(process.env.PORT || 3000, function () {
    console.log('Eatr server is running on 3000!')
  })
}
