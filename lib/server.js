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

const env = process.env.NODE_ENV || 'development'
const knex = Knex(knexConfig[env])
const {findUser, editUser} = User(knex)

const forceSsl = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''))
  }
  return next()
}


export default () => {

  const app = express()
  app.use(require('cookie-parser')())
  app.use(require('body-parser').urlencoded({ extended: true }))
  if (env === 'production') {
      app.use(forceSsl);
  }
  app.use(express.static(path.join(__dirname, '../public')))

  Passport(app,passport)

  app.get('/username', function (req, res) {
    if (!req.session.passport) {
      res.json([])
    } else {
      return findUser(req.session.passport.user.id)
        .then(user => res.json(user))
    }
  })

  app.get('/restaurants/:lat/:lon/:rad', (req, res) => {
    getRestaurants(req.params.lat, req.params.lon, req.params.rad)
    .then((restaurants) => {
      res.json(restaurants)
    })
     // res.json({restaurantObjects: restaurantArray})  // development only
  })

  app.get('/nextpage/:lat/:lon/:token', (req, res) => {
    getRestaurants(req.params.lat, req.params.lon, null, req.params.token)
      .then((restaurants) => {
        res.json(restaurants)
      })
    // res.json({restaurantObjects: newRestaurantArray})
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
