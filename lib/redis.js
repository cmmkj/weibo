'use strict'

const Redis = require('ioredis')
const redis = new Redis({
  dropBufferSupport: true, 
  host: 'localhost',
  port: 6379
})

module.exports = redis
