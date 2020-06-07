'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')

const router = new Router()
router.prefix('/api')

router.post('/login', controllers.user.login);
router.post('/register', controllers.user.register);

router.get('/:id/:name', controllers.test.getName);

module.exports = router
