const express = require('express');
const router = express.Router();

const userRouter = require('../controllers/user');


router.get('/home', userRouter.rendUserHome)
router.get('/acct', userRouter.rendAcct)
router.get('/deposit', userRouter.rendDeposit)
router.get('/withdraw', userRouter.rendWithdraw)

module.exports = router;