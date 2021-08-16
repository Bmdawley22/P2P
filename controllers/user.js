const users = require('../data/userData')

const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./data/users.json'));

const rendUserHome = (req, res, next) => {

    let activeUser = false;
    for(i=0; i < data.users.length ; i++) {
        if (data.users[i]["active"] === true) {
            activeUser = data.users[i]
        }
    }

    console.log(activeUser);
    
    res.render('user.ejs', {
        user: activeUser
    })
}

module.exports = {
    rendUserHome
}