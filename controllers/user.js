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

const rendDeposit = async (req,res,next) => {
    let data = await getData()

    let activeUser = await findActiveUser(data)
    res.render('transact.ejs', {
        user: activeUser,
        transact: 'deposit'
    })
}
const rendWithdraw = async (req,res,next) => {
    let data = await getData()

    let activeUser = await findActiveUser(data)
    res.render('transact.ejs', {
        user: activeUser,
        transact: 'withdraw'
    })
}

module.exports = {
    rendUserHome, 
    rendAcct,
    rendDeposit,
    rendWithdraw
}