var passport = require('passport')

var GoogleStrategy = require('passport-google-oauth20').Strategy;



passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})




passport.use(new GoogleStrategy({
    clientID: "194279696635-g0v4t84php7qibh49mfk8tkkkr4f3b3f.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:4000/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
    cb(null,profile)
  }
));