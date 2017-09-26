'use strict'

const passport = require('koa-passport')
const WeiboStrategy = require('passport-weibo').Strategy
const knex = require('./knex')

//let User = require('../models/user')

let config = require('../config')

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user)
  })
})

passport.use(new WeiboStrategy({
  clientID: config.weibo.appkey,
  clientSecret: config.weibo.secret,
  callback: config.weibo.oauth_callback_url
}, function(token, refreshToken, profile, done) {
  knex('user').where('weibo_id',   profile.id).first('user.*').then(user => {
    if (user) {
      if (!user.weibo_token) {
        user.weibo_token = token
        user.weibo_name = profile.name

        knex('user').insert(user).then(() => {
          return done(null, user)
        })
      }
    } else {
      let newUser = {
        weibo_id: profile.id,
        weibo_token: token,
        weibo_name: profile.displayName
      }
      knex('user').insert(user).then(() => {
        return done(null, newUser)
      })
    }
  })
})) 

module.exports = passport
