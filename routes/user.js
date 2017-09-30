const passport = require('../lib/passport')

function* weiboSuccess (next) {
	let self = this
/*	let yy = function () {
		return new Promise((resolve, reject) => {
			passport.authenticate('weibo', function* (err, user, info) {
  			console.log('nnnnnnnnnnnnnnnnn')
				console.log(user)
				console.log('dddddddddddddddddd')
  			console.log(info)
				if (err) return reject (err)
				return resolve({user, info})
			})	
		})
	}
	yy().then((data) => {
			self.body = '恭喜你,微博授权成功'
	}) 
*/
	return passport.authenticate('weibo', function* (err, user, info, status){
  			console.log('nnnnnnnnnnnnnnnnn')
				console.log(user)
				console.log('dddddddddddddddddd')
  			console.log(info)
		
	})(self, next) 
			self.body = '恭喜你,微博授权成功'
}
module.exports = {
  weiboSuccess
}
