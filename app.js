var express = require('express')
var session = require('express-session')
const mustache = require('mustache-express')
const bodyParser = require('body-parser')
// const models = require('../common/models')
const app = express()
app.use(express.static(__dirname + '/public'))
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))
app.listen(3000, function () {
  console.log('listening')
})
var mainroute = require('./routes/home.js')
var userroute = require('./routes/profile.js')
var eventroute = require('/routes/event.js')
app.use('/u', userroute)
app.use('/', mainroute)
app.use('/e', eventroute)
