const express = require('express');
const router = express.Router();

const userRouter = require('../controllers/user');


router.get('/home', userRouter.rendUserHome)

module.exports = router;