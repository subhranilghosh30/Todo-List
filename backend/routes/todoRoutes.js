const express= require('express')
const router= express.Router()
const {getToDo, setToDo, updateToDo, deleteToDo}= require('../controllers/todoController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getToDo).post(protect, setToDo)
router.route('/:id').delete(protect, deleteToDo).put(protect, updateToDo)


module.exports = router
