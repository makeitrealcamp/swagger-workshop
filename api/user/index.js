/**
 * User
 * @author: Cristian Moreno Zuluaga <khriztianmoreno@gmail.com>
 */

const Router = require('express').Router

const controller = require('./user.controller')

const router = new Router()

router.get('/', controller.index)
router.delete('/:id', controller.destroy)
router.get('/:id', controller.show)
router.post('/', controller.create)

module.exports = router
