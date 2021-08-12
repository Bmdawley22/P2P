const users = require('../data/userData')

const fs = require('fs')



const rendLogin = (req, res, next) => {
    res.render('login.ejs', {
        authMsg: false
    })
}
const rendSignup = (req, res, next) => {
    res.render('signup.ejs', {
        authMsg: false
    })
}

const login = (req, res, next) => {
    const data = JSON.parse(fs.readFileSync('./data/users.json'));

    //used for when using userData.js
    const usernameFound = data.users.findIndex(user => {
        return user.username === req.body.username;
    })
    if(usernameFound !== -1) {
        if(data.users[usernameFound].password === req.body.password) {
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

const signup = (req,res,next) => {
    try {
        let data = JSON.parse(fs.readFileSync('./data/users.json'))

        //gets input data in users.json format
        const newUser = req.body;
        newUser.id = String(data.users.length);
        let check = {nameCheck: true, emailCheck: true, userCheck: true}
        let nameCheck = true
        let emailCheck = true
        let userCheck = true

        for(i=0;i<data.users.length; i++) {
            if(newUser.fName === data.users[i].fName && newUser.lName === data.users[i].lName) {
                check.nameCheck = false;
            }      
            if(newUser.email == data.users[i].email) {
                check.emailCheck = false;
            }
            if(newUser.username === data.users[i].username) {
                check.userCheck = false
            }
        }

        if(check.nameCheck && check.emailCheck) {
            if(check.userCheck) {
                //adds data to users.json
                data.users.push(newUser)
                data = JSON.stringify(data, null, 5)

                fs.writeFile('./data/users.json', data, (data) => {
                    res.redirect('/')
                }) 
            } else {
                res.render('signup.ejs', {
                    auth: false,
                    authMsg: 'Username is taken'
                })
            }
        } else {
            res.render('signup.ejs', {
                auth: false,
                authMsg: "You've already created an account, please login"
            })
        }
        
         
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    rendLogin,
    rendSignup, 
    login,
    signup
}