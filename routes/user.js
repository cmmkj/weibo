const passport = require('../lib/passport')

function* weiboSuccess (next) {
  console.log('nnnnnnnnnnnnnnnnn')
  console.log('nnnnnnnnnnnnnnnnn')
  console.log('nnnnnnnnnnnnnnnnn')
  console.log('nnnnnnnnnnnnnnnnn')
  this.body = '恭喜你,微博授权成功'
}
module.exports = {
  weiboSuccess
}
