require('dotenv').config()

import path 					  from  'path'
import express 				  from  'express'
import session     		  from  'express-session'
import passport         from  'passport'
import Passport         from  './passport.js'
import getRestaurants   from  './get-restaurants.js'

import Knex             from  'knex'
import knexConfig       from  '../knexfile.js'
import {session as KnexSessionStore}            from 'connect-session-knex'
import User             from '../../db/user-functions.js'

const {addUser, findUser, editUser} = User(knex)
const knex = Knex(knexConfig[process.env.NODE_ENV || development])
const store = new KnexSessionStore(session)

export default () => {

  const app = express()

  app.use(express.static(path.join(__dirname, '../public')))
  app.use(require('cookie-parser')())
  app.use(require('body-parser').urlencoded({ extended: true }))

  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true, 
    saveUninitialized: true,
    store: store
  }))

  Passport(app,passport)

  app.get('/', function (req, res) {
    res.sendFile('../public/index.html')
  })

  app.get('/username', function (req, res) {
    res.json(req.session.passport)
  })

  app.get('/restaurants', (req, res) => {
        getRestaurants()
        .then((data) => {
            res.json(data)
        })
  
  })


  app.listen(3000, function () {
    console.log('Eatr server is running on 3000!')
  })
}