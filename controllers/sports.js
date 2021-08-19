const fs = require('fs')

const { getData, findActiveUser, getSports } = require('../utils')

const renderSports = async (req, res, next) => {

    let userData = await getData()

    let activeUser = await findActiveUser(userData)

    let data = await getSports()

    let leagues = []
    let sports = [];

    for(let i=0; i < data.length; i++) {
        !leagues.includes(data[i]['title'])
        if(!leagues.includes(data[i]['title'])){
            leagues[i] = data[i]["title"];
        }
        sports[i] = data[i]["group"]
    }
    console.log(leagues, sports);
    res.render('sports.ejs', {
        leagues,
        sports,
        user: activeUser
    })
}

module.exports = {
    renderSports
}