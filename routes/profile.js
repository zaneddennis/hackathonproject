const express = require('express')
const router = express.Router()
// const session = require('express-session')
const bodyParser = require('body-parser')
const models = require('../common/models')
router.use(bodyParser.urlencoded({ extended: false }))
router.get('/:name', function (req, res, next) {
  var username = req.params.name
  models.Volunteer.findOne({where: {last_name: username}}).then(user => {
    if (user.length) {
      res.render('profile-user', {user: user})
    } else {
      models.Organizer.findOne({where: {last_name: username}}).then(user => {
        res.render('profile-organization', {user: user})
      })
    }
  })
})
