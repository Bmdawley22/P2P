const users = require('../data/userData')

const rendLogin = (req, res, next) => {
    //console.log(users[0].id);
    res.render('login.ejs', {
        authMsg: false
    })
}
const rendSignup = (req, res, next) => {
    res.send('', {
        error: false
    })
}

const login = (req, res, next) => {
    console.log(req.body);
    const usernameFound = users.findIndex(user => {
        return user.username === req.body.username;
    })
    if(usernameFound !== -1) {
        if(users[usernameFound].password === req.body.password) {
            res.redirect('/')
        }
        res.render('login.ejs', {
            auth: false,
            authMsg: 'Password is incorrect'
        })
    } 
    res.render('login.ejs', {
        auth: false,
        authMsg: 'Username not found'
    })
}

module.exports = {
    rendLogin,
    rendSignup, 
    login
}