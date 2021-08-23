const fs = require('fs')

const { getData, findActiveUser, getSports } = require('../utils')

const renderSports = async (req, res, next) => {

    let userData = await getData()

    let activeUser = await findActiveUser(userData)

    let data = await getSports()

    let leagues = []
    let sports = [];
    let repeatCtr = 0;

    for(let i=0; i < data.length; i++) {
        if(!sports.includes(data[i]['group'])){
            sports[i-repeatCtr] = data[i]["group"]
        } else {
            repeatCtr++;
        }

    }
    console.log(sports);
    res.render('sports.ejs', {
        sports,
        user: activeUser
    })
}

module.exports = {
    renderSports
}