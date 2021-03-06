const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../config');


module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {
    const userData = {
        email: email.trim(),
        password: password.trim()
    };

    // find a user by email address
    return User.findOneAndRemove({
        email: userData.email
    }, (err, user) => {
        if (err) {
            return done(err);
        }

        if (!user) {
            const error = new Error('Incorrect email or password');
            error.name = 'IncorrectCredentialsError';

            return done(error);
        }
        const data = {
            name: user
        };

        return done(null, data);
    });
});
