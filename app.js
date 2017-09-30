const koa = require('koa')
const app = new koa()
const bodyParser = require('koa-body')
const etag = require('koa-etag')
const compress = require('koa-compress')
const serve = require('koa-static')
const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const redis = require('./lib/redis')
const router = require('./routes')
const http = require('http')
const passport = require('./lib/passport')

app.use(bodyParser())

app.keys = ['keys', 'secret']

app.use(etag())
app.use(compress())


app.use(session({
  store: redisStore({client: redis}),
  prefix: 'test:user:sess:', 
  cookie: {
    signed: false,
    maxage: 24 * 60 * 60
  }
}))

app.use(passport.initialize())
app.use(passport.session())

app
  .use(router.routes())
  .use(router.allowedMethods())
let server = http.createServer(app.callback())

server.listen(3000)
server.on('listening', function () {
  console.log('server is listening to 3000')
})

/*
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const mongoose = require('mongoose')
const passport = require('passport')

const flash = require('connect-flash')

const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')

let configDB = require('./config/database.js')

mongoose.connect(configDB.url)

require('./lib/passport')(passport)

app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser())

app.set('view engine', 'ejs')

app.use(session({secret: 'node-auth'}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

require('./routes/routes.js')(app, passport)

app.listen(port)

console.log('the magic happens on port' + port)
*/
