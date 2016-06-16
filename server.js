require('dotenv').config()

import path 					  from  'path'
import express 				  from  'express'
import session     		  from  'express-session'
import passport         from  'passport'
import TwitterStrategy  from  'passport-twitter'

var app = express()


// app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'public')))
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());


// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   saveUninitialized: true,
//   resave: true,
//   store: store
// }))


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// app.get('/username', function (req, res) {
//   res.json(req.session.passport)
// })


// passport.use(new TwitterStrategy({
//     consumerKey: process.env.TWITTER_CONSUMER_KEY,
//     consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
//     callbackURL: "http://localhost:3000/auth/twitter/callback"
//   },
//   function(token, tokenSecret, profile, cb) {
//     console.log("Authenticated Twitter user: ", profile.displayName, profile.id)
//       return cb(null, profile);
//   }
// ));

// passport.serializeUser(function(user, done) {
//   console.log("serializeUser from twitter: ", user.displayName, user.id)

//   done(null, {
//      name: user.displayName,
//      screenName: user['screen_name'],
//      twitterId: user.id
//       });
// });

// passport.deserializeUser(function(obj, callback) {
//   console.log("deserializeUser function running: ", obj)
//   callback(null, obj)
// })

// app.get('/auth/twitter',
//   passport.authenticate('twitter'));

// app.get('/auth/twitter/callback', 
//   passport.authenticate('twitter', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})