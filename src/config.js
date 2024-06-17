'use strict'

const path = require('path')

module.exports = {
  port: '3001',
  secret: 'secret',
  publicDir: path.resolve(__dirname, './public'),
  logPath: path.resolve(__dirname, '../logs/koa-template.log'),
  mongoDB: {
    host: '127.0.0.1',
    port: 27017,
    database: 'blog',
    username: 'root',
    password: 'root',
  }
}
