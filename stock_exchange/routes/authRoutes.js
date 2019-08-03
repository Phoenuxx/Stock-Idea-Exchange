const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login');
});

//autho logout
router.get('/logout', (req,res) => {
    //handle w/ passport
    res.send('logging out');
});

//auth w/ google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//callback for google redirect
router.get('/', passport.authenticate('google'), (req,res) => {
    console.log('google cb redirect test');
})

module.exports = router;