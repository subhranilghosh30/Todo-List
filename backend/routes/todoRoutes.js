const express= require('express')
const router= express.Router()
const {getToDo, setToDo, updateToDo, deleteToDo}= require('../controllers/todoController')

router.route('/').get(getToDo).post(setToDo)
router.route('/:id').delete(deleteToDo).put(updateToDo)


module.exports = router
