const express = require('express')
const router = express.Router()
// const session = require('express-session')
const bodyParser = require('body-parser')
const models = require('../common/models')
router.use(bodyParser.urlencoded({ extended: false }))
router.get('/:eventname', function (req, res, next) {
  var eventname = req.params.eventname
  models.Event.findOne({where: {title: eventname}}).then(event => {
    res.render('event', {event: event})
  })
})
