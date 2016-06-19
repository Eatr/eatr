require('dotenv')
import Knex             from  'knex'
import knexConfig       from  '../knexfile.js'
import session     		  from  'express-session'
import SessionStore from 'connect-session-knex'
import User             from '../db/user-functions.js'

const KnexSessionStore = SessionStore(session)
const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])
const {addUser, findUser, editUser, processUser} = User(knex)

const store = new KnexSessionStore({
    knex: knex,
    tablename: 'sessions'
});

import TwitterStrategy  from  'passport-twitter'
import FacebookStrategy from  'passport-facebook'

export default (app, passport) => {
	app.use(session({
	  secret: process.env.SESSION_SECRET,
	  resave: true, 
	  saveUninitialized: true,
	  store: store
	}))

	app.use(passport.initialize())

	passport.use(new TwitterStrategy({
		consumerKey: process.env.TWITTER_CONSUMER_KEY,
		consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
		callbackURL: "http://localhost:3000/auth/twitter/callback"
	},
		(token, tokenSecret, profile, cb) => {
			var user = {
				passportId: profile._json.id,
				name: profile._json.name,
				shortlist: []
			}
			return processUser(user)
				.then((user) => {
					return cb(null, user)
				})
			// return cb(null, profile)
	}
	))
	
	passport.use( new FacebookStrategy({
		clientID:     process.env.APP_ID,
		clientSecret: process.env.APP_SECRET,
		callbackURL:  "http://localhost:3000/auth/facebook/callback"
	},
		(accessToken, refreshToken, profile, cb) => {
			var user = { 
				passportId: profile.id,
				name: profile.displayName,
				shortlist: []
			}
			return processUser(user)
				.then((user) => {
					return cb(null, user)
				})
		}
	))

	passport.serializeUser((user, done) => {
		console.log("serializeUser", user)
		done(null,user)
	})

	passport.deserializeUser((obj, callback) => {
		console.log("deserializeUser", obj)
		callback(null, obj)
	})

	app.get('/auth/twitter', passport.authenticate('twitter'))

	app.get('/auth/twitter/callback', 
		passport.authenticate('twitter', { failureRedirect: '/login' }),
		(req, res) => res.redirect('/')
	)
	
	app.get('/auth/facebook', passport.authenticate('facebook'))

	app.get('/auth/facebook/callback', 
		passport.authenticate('facebook', { failureRedirect: '/login' }),
		(req, res) => res.redirect('/')
	)

}