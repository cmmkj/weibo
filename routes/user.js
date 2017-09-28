const passport = require('../lib/passport')

function* weiboSuccess (next) {
  this.body = '恭喜你,微博授权成功'
}
module.exports = {
  weiboLogin,
  weiboLoginCallback,
  weiboSuccess
}
