const users = require('../data/userData')

const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./data/users.json'));


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
    //used when using data.json
    let usernameFound = false;
    for (const [id, user] of Object.entries(data)) {
        if (user.username === req.body.username) {
            usernameFound = id;
        }
    }
    //used for when using userData.js
    // const usernameFound = users.findIndex(user => {
    //     return user.username === req.body.username;
    // })
    if(usernameFound) {
        if(users[usernameFound].password === req.body.password) {
            res.redirect('/')
        }
        else {
            res.render('login.ejs', {
                auth: false,
                authMsg: 'Password is incorrect'
            })
        }
    } else {
        res.render('login.ejs', {
            auth: false,
            authMsg: 'Username not found'
        })
    }
}

module.exports = {
    rendLogin,
    rendSignup, 
    login
}