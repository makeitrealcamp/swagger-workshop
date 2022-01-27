/**
 * Task
 * @author: Cristian Moreno Zuluaga <khriztianmoreno@gmail.com>
 */

const Router = require('express').Router

const controller = require('./task.controller')

const router = new Router()

router.get('/', controller.index)
router.delete('/:id', controller.destroy)
router.get('/:id', controller.show)
router.post('/', controller.create)
router.get('/user/:id', controller.byUser)

module.exports = router
