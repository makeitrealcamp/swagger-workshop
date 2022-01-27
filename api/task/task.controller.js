/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/tasks              ->  index
 * POST    /api/tasks              ->  create
 * GET     /api/tasks/:id          ->  show
 * PUT     /api/tasks/:id          ->  update
 * DELETE  /api/tasks/:id          ->  destroy
 * GET     /api/tasks/user/:id     ->  byUser
 * @author: Cristian Moreno Zuluaga <khriztianmoreno@gmail.com>
 */

const axios = require('axios')

const URL = 'http://localhost:9090'

/**
 * Get list of task
 */
async function index(_, res) {
  try {
    const response = await axios.get(`${URL}/tasks`)
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Creates a new task
 */
async function create(req, res) {
  const task = req.body

  try {
    const response = await axios.post(`${URL}/tasks`, task)
    res.status(201).json(response.data)
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Get a single task
 */
async function show(req, res) {
  const { id: taskId } = req.params

  if (!taskId) {
    res.status(400).send('Task id is required')
    return
  }

  try {
    const response = await axios.get(`${URL}/tasks/${taskId}`)
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Deletes a task
 */
async function destroy(req, res) {
  const { id: taskId } = req.params

  if (!taskId) {
    res.status(400).send('Task id is required')
    return
  }

  try {
    const response = await axios.delete(`${URL}/tasks/${taskId}`)
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Get tasks by user
 */
async function byUser(req, res) {
  const { id: userId } = req.params

  if (!userId) {
    res.status(400).send('Task id is required')
    return
  }

  try {
    const response = await axios.get(`${URL}/tasks?userId=${taskId}`)
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  byUser,
  create,
  destroy,
  index,
  show,
}
