const express = require('express');
const router = express.Router();

const sportsRouter = require('../controllers/sports');

router.get('/', sportsRouter.renderSports)

module.exports = router;