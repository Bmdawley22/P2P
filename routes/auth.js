const express = require('express');
const router = express.Router();

const authRouter = require('../controllers/auth');


router.get('/login', authRouter.rendLogin)
router.post('/login', authRouter.login)
router.get('/signup', authRouter.rendSignup)
router.post('/signup', authRouter.signup)
router.get('/signOut', authRouter.signOut)

module.exports = router;