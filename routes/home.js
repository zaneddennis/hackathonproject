const express = require('express')
const router = express.Router()
const session = require('express-session')
const bodyParser = require('body-parser')
const models = require('../common/models')
router.get('/', function (req, res, next) {
  res.render('main')
})
