const fs = require('fs')

const { getSports } = require('../utils')

const renderSports = async (req, res, next) => {

    let data = await getSports()

    let sports = []

    for(let i=0; i < data.length; i++) {
        sports[i] = data[i]["title"];
        console.log(data[i]["title"]);
    }
    console.log(sports);
    res.send(sports)
}

module.exports = {
    renderSports
}