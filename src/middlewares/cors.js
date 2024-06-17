'use strict'

const corsHandler = {
  origin(ctx) {
    if (ctx.url === '/test') {
      // 这里可以配置不运行跨域的接口地址
      return false;
    }
    return '*';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}

module.exports = {
  corsHandler
}
