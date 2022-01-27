/**
 * Task
 * @author: Cristian Moreno Zuluaga <khriztianmoreno@gmail.com>
 */

const Router = require('express').Router

const controller = require('./task.controller')

const router = new Router()

/**
 * @openapi
 * /api/tasks:
 *  get:
 *    tags:
 *    - Task
 *    summary: Get all task
 *    description: Get all taks from the db.json
 *    responses:
 *      200:
 *       description: Get all task
 *       content:
 *        application/json:
 *         schema:
 *          type: array
 *          items:
 *           $ref: '#/components/schemas/taskResponse'
 *      500:
 *       description: Server error
 */
router.get('/', controller.index)

router.delete('/:id', controller.destroy)
router.get('/:id', controller.show)
router.post('/', controller.create)
router.get('/user/:id', controller.byUser)

module.exports = router
