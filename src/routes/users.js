const router = require('express').Router()

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addBookToUser,
  deleteBookFromUser,
} = require('../controllers/users')

router.get('/', getUsers)
router.get('/users/:user_id', getUser)
router.post('/', createUser)
router.patch('/users/:user_id', updateUser)
router.delete('/users/:user_id', deleteUser)
router.post('/users/:user_id/books/:book_id', addBookToUser)
router.delete('/users/:user_id/books/:book_id', deleteBookFromUser)

module.exports = router