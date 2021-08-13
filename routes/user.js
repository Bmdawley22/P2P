const express = require('express');
const router = express.Router();

const userouter = require('../controllers/user');


router.get('/home', userouter.rendUserHome)
// router.post('/login', authRouter.login)
// router.get('/signup', authRouter.rendSignup)
// router.post('/signup', authRouter.signup)

module.exports = router;