
import path 					  from  'path'
import express 				  from  'express'
import session     		  from  'express-session'
import passport         from  'passport'
import Passport         from  './passport.js'
import getRestaurants   from  './get-restaurants.js'
import {restaurantArray}  from '../source/helpers/restaurant-test-array.js'

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
    res.json(req.session.passport)
  })

  app.get('/restaurants/:lat/:lon/:rad', (req, res) => {
    // getRestaurants(req.params.lat, req.params.lon, req.params.rad)
    // .then((data) => {
      res.json(restaurantArray)
    // })
  
  })


  app.listen(process.env.PORT || 3000, function () {
    console.log('Eatr server is running on 3000!')
  })
}
