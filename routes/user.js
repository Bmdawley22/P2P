const express = require('express');
const router = express.Router();

const userRouter = require('../controllers/user');


router.get('/home', userRouter.rendUserHome)
router.get('/acct', userRouter.rendAcct)
router.get('/rendDeposit', userRouter.rendDeposit)
router.get('/rendWithdraw', userRouter.rendWithdraw)
router.get('/deposit', userRouter.deposit)
router.get('/withdraw', userRouter.withdraw)
router.get('/friends', userRouter.rendFriends)
router.get('/friend/profile/:id', userRouter.rendFriendProfile)

module.exports = router;