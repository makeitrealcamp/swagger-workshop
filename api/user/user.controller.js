/**
 * User controller
 * .
 * GET     /api/users              ->  index
 * POST    /api/users              ->  create
 * GET     /api/users/:id          ->  show
 * DELETE  /api/users/:id          ->  destroy
 * @author: Cristian Moreno Zuluaga <khriztianmoreno@gmail.com>
 */
const axios = require('axios')

const URL = 'http://localhost:9090'

/**
 * Get list of users
 */
async function index(_, res) {
  try {
    const response = await axios.get(`${URL}/users`)
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Creates a new user
 */
async function create(req, res) {
  const user = req.body

  try {
    const response = await axios.post(`${URL}/users`, user)
    res.status(201).json(response.data)
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Get a single user
 */
async function show(req, res) {
  const { id: userId } = req.params

  if (!userId) {
    res.status(400).send('User id is required')
    return
  }

  try {
    const response = await axios.get(`${URL}/users/${userId}`)
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).send(error)
  }
}

/**
 * Deletes a user
 */
async function destroy(req, res) {
  const { id: userId } = req.params

  if (!userId) {
    res.status(400).send('User id is required')
    return
  }

  try {
    const response = await axios.delete(`${URL}/users/${userId}`)
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  create,
  destroy,
  index,
  show,
}
