const fs = require('fs')
const { getData, reWriteData, findActiveUser } = require('../utils')


const rendUserHome = async (req, res, next) => {

    let data = await getData()

    let activeUser = await findActiveUser(data)

    res.render('user.ejs', {
        user: activeUser
    })
}

const rendAcct = async (req,res,next) => {
    let data = await getData()

    let activeUser = await findActiveUser(data)
    res.render('acct.ejs', {
        user: activeUser
    })
}
module.exports = {
    rendUserHome, 
    rendAcct
}