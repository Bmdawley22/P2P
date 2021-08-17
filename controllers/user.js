const fs = require('fs')
const { getData, reWriteData } = require('../utils')


const rendUserHome = async (req, res, next) => {
    let activeUser = {};

    let data = await getData()

    for(i=0; i < data.users.length ; i++) {
        if (data.users[i]["active"] === true) {
            activeUser = data.users[i]
        }
    }

    res.render('user.ejs', {
        user: activeUser
    })
}

module.exports = {
    rendUserHome
}