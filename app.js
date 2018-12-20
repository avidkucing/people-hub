const express = require('express'),
    app = express(),
    passport = require('passport'),
    auth = require('./auth');
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');
    port = process.env.PORT || 3000;

app.set('view engine', 'pug');
auth(passport);

app.use(passport.initialize());

app.use(cookieSession({
    name: 'session',
    keys: ['666']
}));

app.use(cookieParser());

app.get('/', (req, res) => {
    if (req.session.token) {
        res.cookie('token', req.session.token);
        //res.json({
          //  status: 'session cookie set'
        //});
        res.render('logout');
    } else {
        res.cookie('token', '');
        //res.json({
          //  status: 'session cookie not set'
        //});
        res.render('login');
    }
});

app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login']
}));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failed'
    }),
    (req, res) => {
        req.session.token = req.user.token;
        res.redirect('/');
    }
);

app.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

