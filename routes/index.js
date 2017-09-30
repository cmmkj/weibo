const Router = require('koa-router')
const User = require('./user')
const passport = require('../lib/passport')
let router = new Router()

//router.get('/', User.list)
router.get('/', function* (next) {
  this.body = '<!doctype html>' +
                '<html>' +
                '<head>' +
                  '<title>Node Authentication</title>' +
                  '<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">' +
                  '<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">' + 
                '</head>' + 
                '<body>' +
                  '<div class="container">' +
                    '<div class="jumbotron text-center">' +
                      '<a href="/auth/weibo" class="btn btn-primary"><span class="fa fa-weibo"></span> Sina Weibo</a> ' +
                    '</div>' +
                  '</div>' +
                '</body>' +
                '</html>' 
})

router.get('/weiboSuccess', User.weiboSuccess)
router.get('/auth/weibo', passport.authenticate('weibo'))

router.get('/auth/weibo/callback', 
	passport.authenticate('weibo', {failureRedirect: '/'}), 
	function* (next) {
		this.session.user = this.req.user
		this.body = '恭喜,微博授权成功'
	}
)
module.exports = router

