const Router = require('koa-router')
//const User = require('../controllers/user')
let router = new Router()

//router.get('/', User.list)
router.get('/', function* (next) {
  this.body = 'qqqqqqqqqqqqqqqqqqqqqqq'
})

module.exports = router

