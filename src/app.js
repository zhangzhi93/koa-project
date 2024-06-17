'use strict'

const Koa = require('koa')
const body = require('koa-body')
// 静态文件请求处理
const staticCache = require('koa-static-cache')
// 跨域请求
const cors = require('koa2-cors')
// http协议安全
const helmet = require("koa-helmet")

const publicRouter = require('./routes/public')
const privateRouter = require('./routes/private')

const { loggerMiddleware } = require('./middlewares/logger')
const { errorHandler, responseHandler } = require('./middlewares/response')
const { corsHandler } = require('./middlewares/cors')

// 配置文件
const config = require('./config')

// 数据库连接
const connect = require('./mongodb')


const app = new Koa();

(async () => {
  //执行连接数据库任务
  await connect()
})()

// Logger
app.use(loggerMiddleware)

// Error Handler
app.use(errorHandler)

// 处理body请求参数
app.use(body())
// 处理访问静态文件的中间件
app.use(staticCache(config.publicDir))

// Helmet
app.use(helmet())

// Cors
app.use(cors(corsHandler))

// Routes
app.use(publicRouter.routes(), publicRouter.allowedMethods())
app.use(privateRouter.routes(), privateRouter.allowedMethods())

// Response
app.use(responseHandler)

module.exports = app
