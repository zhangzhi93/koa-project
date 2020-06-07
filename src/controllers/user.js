'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config')
const userServices = require('../services').user
const { InvalidQueryError } = require('../lib/error')

const login = {
  login: async (ctx, next) => {
    const { account, password } = ctx.request.body
    if (!account || !password) {
      throw new InvalidQueryError();
    }
    const user = await userServices.login({
      account: account,
      password: password
    })
    if (!user) {
      ctx.result = ''
      ctx.msg = '用户不存在'
    } else {
      ctx.result = {
        user: user,
        token: jwt.sign({
          data: user._id,
          exp: Math.floor(Date.now() / 1000) + (60 * 60), // 设置 token 过期时间
        }, config.secret)
      }
    }
    return next()
  },
  register: async (ctx, next) => {
    const { account, password } = ctx.request.body;
    try {
      const res = await userServices.save({
        account,
        password,
      });
      ctx.body = { code: 200, message: '操作成功', id: res.uuid };
    } catch (err) {
      if (err.message.match('E11000 duplicate key')) {
        ctx.body = { code: -1, message: '登录名已存在' };
      } else {
        ctx.body = { code: -1, message: err.message };
      }
    }
    return next();
  }
}


module.exports = login
