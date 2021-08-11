const rendLogin = (req, res, next) => {
    res.send('login page')
}
const rendSignup = (req, res, next) => {
    res.send('signup page')
}

module.exports = {
    rendLogin,
    rendSignup
}