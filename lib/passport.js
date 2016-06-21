
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
		callbackURL: process.env.ROOT_URL + "/auth/twitter/callback"
	},
		(token, tokenSecret, profile, cb) => {
			var user = {
				passportId: profile._json.id,
				name: profile._json.name,
				picture: profile._json.profile_image_url,
				shortlist: '[]'
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
		callbackURL:  process.env.ROOT_URL + "/auth/facebook/callback",
		profileFields: ['id', 'first_name', 'displayName', 'picture']
	},
		(accessToken, refreshToken, profile, cb) => {
			var user = { 
				passportId: profile.id,
				name: profile.name.givenName,// || profile.displayName.split(' ').shift(),
				picture: profile.photos[0].value || '/images/blank-profile.png',
				shortlist: '[]'
			}
			return processUser(user)
				.then((user) => {
					return cb(null, user)
				})
		}
	))

	passport.serializeUser((user, done) => {
		let details = {name: user[0].name, id: user[0].id}
		done(null, details)
	})

	passport.deserializeUser((id, callback) => {
		console.log("deserializeUser********", id)
		return findUser(id)
			.then((user) => {
				return callback(null, user)
			})
	})

	app.get('/auth/twitter', passport.authenticate('twitter'))

	app.get('/auth/twitter/callback', 
		passport.authenticate('twitter', { failureRedirect: '/login' }),
		(req, res) => res.redirect('/')
	)
	
	app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['public_profile']}))

	app.get('/auth/facebook/callback', 
		passport.authenticate('facebook', { failureRedirect: '/login' }),
		(req, res) => res.redirect('/')
	)

}