require('dotenv').config()

import path 					  from  'path'
import express 				  from  'express'
import session     		  from  'express-session'
import passport         from  'passport'
import Passport         from  './passport.js'

export default () => {

  const app = express()

  app.use(express.static(path.join(__dirname, 'public')))
  app.use(require('cookie-parser')())
  app.use(require('body-parser').urlencoded({ extended: true }))
  app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))
  Passport(app,passport)


  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })
  // app.get('/restaurants/', function )

  app.get('/username', function (req, res) {
    res.json(req.session.passport)
  })



  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
}