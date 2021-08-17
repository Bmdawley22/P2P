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
const deposit = async (req,res,next) => {
    let data = await getData()

    let activeUserId = await findActiveUser(data).id
    
    const curBalance = Number(data.users[activeUserId]["bal"])

    data.users[activeUserId]["bal"] = curBalance + Number(req.query.depositAmt);
    reWriteData(data)

    res.render('acct.ejs', {
        user: data.users[activeUserId]
    })
}
const withdraw = async (req,res,next) => {
    let data = await getData()

    let activeUserId = await findActiveUser(data).id
    
    const curBalance = Number(data.users[activeUserId]["bal"])
    console.log(curBalance, Number(req.query.withdrawAmt));

    if(curBalance > Number(req.query.withdrawAmt)) {
        data.users[activeUserId]["bal"] = curBalance - Number(req.query.withdrawAmt);
    } else {
        data.users[activeUserId]["bal"] = 0
    }
    
    reWriteData(data)

    res.render('acct.ejs', {
        user: data.users[activeUserId]
    })
}

const rendFriends = async (req,res,next) => {
    let data = await getData()

    let activeUserId = await findActiveUser(data).id
    
    let friendsArr = data.users[activeUserId]["friends"]
    res.render('friends.ejs', {
        users: data.users,
        userId: activeUserId,
        friends: friendsArr
    })
}
module.exports = {
    rendUserHome, 
    rendAcct,
    rendDeposit,
    rendWithdraw,
    deposit,
    withdraw,
    rendFriends
}