import TwitterStrategy  from  'passport-twitter'
import FacebookStrategy from  'passport-facebook'

export default (app, passport) => {
	app.use(passport.initialize())

	passport.use(new TwitterStrategy({
		consumerKey: process.env.TWITTER_CONSUMER_KEY,
		consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
		callbackURL: "http://localhost:3000/auth/twitter/callback"
	},
		(token, tokenSecret, profile, cb) => {
			console.log("Authenticated Twitter user: ", profile.displayName, profile.id)
			return cb(null, profile)
	}
	))
	
	passport.use( new FacebookStrategy({
		clientID:     process.env.APP_ID,
		clientSecret: process.env.APP_SECRET,
		callbackURL:  "http://localhost:3000/auth/facebook/callback"
	},
		(accessToken, refreshToken, profile, cb) => {
			var user = profile
			console.log("Authenticated Facebook user")
			return cb(null, user)
		}
	))

	passport.serializeUser((user, done) => {
		console.log("serializeUser")
		done(null,user)
	})

	passport.deserializeUser((obj, callback) => {
		console.log("deserializeUser")
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