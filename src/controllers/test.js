'use strict'

const { logger } = require('../middlewares/logger');

const test = {
  test: async (ctx, next) => {
    ctx.result = ctx.jwtData
    return next()
  },
  getName: async (ctx, next) => {
    logger.info(ctx.params);
    logger.info(JSON.stringify(ctx.query));
    const { id, name } = ctx.params;
    const { password } = ctx.query;
    ctx.msg = 'success';
    ctx.result = `${id},${name},${password} janz,周杰伦`;
    return next()
  },
}


module.exports = test
