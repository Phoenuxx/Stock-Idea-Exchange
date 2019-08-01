const passport = require('passport');
const GoogleStrat = require ('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user')

passport.use(
    new GoogleStrat({
        //options for strat
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        //check for existing user
        User.findOne({googleID: profile.id})
        .then( currentUser => {
            if (currentUser){
                //Recurring User
                console.log("User is: ", currentUser);
            } else {
                //New User
                new User({
                    username: profile.displayName,
                    googleID: profile.id
                }).save().then((newUser) => {
                    console.log('new User created: ' + newUser);
                })
            }
        }) 
    })
);