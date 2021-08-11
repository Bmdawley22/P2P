const rendLogin = (req, res, next) => {
    res.render('login.ejs')
}
const rendSignup = (req, res, next) => {
    res.send('signup page')
}

module.exports = {
    rendLogin,
    rendSignup
}