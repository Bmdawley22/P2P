const users = require('../data/userData')

const fs = require('fs')

const rendUserHome = (req, res, next) => {
    res.render('user.ejs', {
        authMsg: true
    })
}

module.exports = {
    rendUserHome
}